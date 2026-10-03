import "server-only";

import type { ProgramItem, RoadmapItem } from "@/data/site-data";
import { requireAdmin } from "@/lib/auth/admin";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";

type AdminProgramRow = {
  slug: string;
  title: string;
  tagline: string | null;
  description: string;
  short_description: string | null;
  category: string;
  level: ProgramItem["level"];
  image_url: string | null;
  price: number;
  duration: string | null;
  focus: string[] | null;
  outcomes: string[] | null;
  skills: string[] | null;
  tools: string[] | null;
  featured: boolean;
  published: boolean;
  display_order: number;
};

type AdminRoadmapRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  level: RoadmapItem["level"];
  image_url: string | null;
  skills: string[] | null;
  tools: string[] | null;
  featured: boolean;
  published: boolean;
  display_order: number;
};

export async function getAdminCatalog() {
  await requireAdmin();
  const supabase = getSupabaseAdminClient();
  if (!supabase) return { programs: [] as ProgramItem[], roadmaps: [] as RoadmapItem[], error: "Admin database access is not configured." };

  const [{ data: programRows, error: programError }, { data: roadmapRows, error: roadmapError }] = await Promise.all([
    supabase.from("programs").select("slug,title,tagline,description,short_description,category,level,image_url,price,duration,focus,outcomes,skills,tools,featured,published,display_order").order("display_order", { ascending: true }),
    supabase.from("roadmaps").select("id,slug,title,description,category,level,image_url,skills,tools,featured,published,display_order").order("display_order", { ascending: true }),
  ]);

  if (programError || roadmapError) {
    return { programs: [] as ProgramItem[], roadmaps: [] as RoadmapItem[], error: "Unable to read the admin catalog. Check that the schema is installed and the service-role key is valid." };
  }

  const roadmapsWithStages = (roadmapRows ?? []) as AdminRoadmapRow[];
  const roadmapIds = roadmapsWithStages.map((roadmap) => roadmap.id);
  const { data: stageRows, error: stageError } = roadmapIds.length
    ? await supabase.from("roadmap_steps").select("roadmap_id,title,description,display_order").in("roadmap_id", roadmapIds).order("display_order", { ascending: true })
    : { data: [], error: null };

  if (stageError) return { programs: [] as ProgramItem[], roadmaps: [] as RoadmapItem[], error: "Unable to read roadmap stages. Re-run the Supabase schema setup." };

  const stagesByRoadmap = new Map<string, { title: string; description: string }[]>();
  for (const stage of stageRows ?? []) {
    const stages = stagesByRoadmap.get(stage.roadmap_id) ?? [];
    stages.push({ title: stage.title, description: stage.description });
    stagesByRoadmap.set(stage.roadmap_id, stages);
  }

  const programs: ProgramItem[] = ((programRows ?? []) as AdminProgramRow[]).map((row) => ({
    slug: row.slug,
    title: row.title,
    tagline: row.tagline ?? row.short_description ?? row.description,
    focus: row.focus ?? [],
    level: row.level,
    description: row.description,
    outcomes: row.outcomes ?? [],
    category: row.category,
    shortDescription: row.short_description ?? row.description,
    imageUrl: row.image_url ?? undefined,
    price: row.price,
    featured: row.featured,
    published: row.published,
    displayOrder: row.display_order,
    duration: row.duration ?? undefined,
    skills: row.skills ?? row.focus ?? [],
    projectSlugs: [],
    tools: row.tools ?? [],
  }));

  const roadmaps: RoadmapItem[] = roadmapsWithStages.map((row) => {
    const stages = stagesByRoadmap.get(row.id) ?? [];
    return {
      slug: row.slug,
      title: row.title,
      description: row.description,
      category: row.category,
      level: row.level,
      imageUrl: row.image_url ?? undefined,
      steps: stages.length ? stages.map((stage) => stage.title) : ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
      stepDescriptions: stages.map((stage) => stage.description),
      featured: row.featured,
      published: row.published,
      displayOrder: row.display_order,
      programSlugs: [],
      classSlugs: [],
      projectSlugs: [],
      skills: row.skills ?? [],
      tools: row.tools ?? [],
    };
  });

  return { programs, roadmaps, error: undefined };
}