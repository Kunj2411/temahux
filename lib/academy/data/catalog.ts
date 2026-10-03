import "server-only";

import { classes, programs, projects, roadmaps, type ProgramItem, type RoadmapItem } from "@academy/data/site-data";
import { getSupabaseServerClient } from "@academy/lib/supabase/server";

export type CatalogResult<T> = {
  items: T[];
  source: "local" | "supabase";
  error?: string;
};

type ProgramRow = {
  slug: string;
  title: string;
  tagline: string | null;
  description: string;
  short_description: string | null;
  category: string;
  level: ProgramItem["level"];
  image_url: string | null;
  price: number;
  featured: boolean;
  published: boolean;
  display_order: number;
  focus: string[] | null;
  outcomes: string[] | null;
  skills: string[] | null;
  tools: string[] | null;
  duration: string | null;
};

type RoadmapRow = {
  slug: string;
  title: string;
  description: string;
  category: string;
  level: RoadmapItem["level"];
  image_url: string | null;
  featured: boolean;
  published: boolean;
  display_order: number;
  skills: string[] | null;
  tools: string[] | null;
};

const localPrograms = programs.filter((item) => item.published).sort((a, b) => a.displayOrder - b.displayOrder);
const localRoadmaps = roadmaps.filter((item) => item.published).sort((a, b) => a.displayOrder - b.displayOrder);

export async function getPrograms(): Promise<CatalogResult<ProgramItem>> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return { items: localPrograms, source: "local" };

  const { data, error } = await supabase
    .from("programs")
    .select("slug,title,tagline,description,short_description,category,level,image_url,price,featured,published,display_order,focus,outcomes,skills,tools,duration")
    .eq("published", true)
    .order("display_order", { ascending: true });

  if (error) return { items: localPrograms, source: "local", error: "Live program data is temporarily unavailable. Showing the saved catalog." };

  const items: ProgramItem[] = ((data ?? []) as ProgramRow[]).map((row) => ({
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

  return { items, source: "supabase" };
}

export async function getProgram(slug: string): Promise<{ item: ProgramItem | null; error?: string }> {
  const catalog = await getPrograms();
  const item = catalog.items.find((program) => program.slug === slug) ?? null;
  if (!item || catalog.source === "local") return { item, error: catalog.error };

  const supabase = getSupabaseServerClient();
  if (!supabase) return { item };
  const { data: programRow } = await supabase.from("programs").select("id").eq("slug", slug).eq("published", true).single();
  if (!programRow) return { item };

  const [{ data: modules }, { data: projectRows }, { data: roadmapRows }] = await Promise.all([
    supabase.from("program_modules").select("title,description,display_order").eq("program_id", programRow.id).order("display_order", { ascending: true }),
    supabase.from("program_projects").select("projects(slug)").eq("program_id", programRow.id),
    supabase.from("roadmap_programs").select("roadmaps(slug)").eq("program_id", programRow.id),
  ]);
  const projectSlugs = (projectRows ?? []).flatMap((entry) => {
    const record = entry as { projects?: { slug: string } | { slug: string }[] | null };
    if (Array.isArray(record.projects)) return record.projects.map((project) => project.slug);
    return record.projects?.slug ? [record.projects.slug] : [];
  });
  const roadmapSlug = (roadmapRows ?? []).map((entry) => {
    const record = entry as { roadmaps?: { slug: string } | { slug: string }[] | null };
    return Array.isArray(record.roadmaps) ? record.roadmaps[0]?.slug : record.roadmaps?.slug;
  }).find((value): value is string => Boolean(value));

  return {
    item: {
      ...item,
      modules: (modules ?? []).map((module) => ({ title: module.title, description: module.description })),
      projectSlugs,
      roadmapSlug,
    },
  };
}

export async function getRoadmaps(): Promise<CatalogResult<RoadmapItem>> {
  const supabase = getSupabaseServerClient();
  if (!supabase) return { items: localRoadmaps, source: "local" };

  const { data, error } = await supabase
    .from("roadmaps")
    .select("slug,title,description,category,level,image_url,featured,published,display_order,skills,tools")
    .eq("published", true)
    .order("display_order", { ascending: true });

  if (error) return { items: localRoadmaps, source: "local", error: "Live roadmap data is temporarily unavailable. Showing the saved catalog." };

  const items: RoadmapItem[] = ((data ?? []) as RoadmapRow[]).map((row) => ({
    slug: row.slug,
    title: row.title,
    description: row.description,
    category: row.category,
    level: row.level,
    imageUrl: row.image_url ?? undefined,
    steps: ["Start", "Foundation", "Practice", "Project", "Advanced", "Career"],
    featured: row.featured,
    published: row.published,
    displayOrder: row.display_order,
    programSlugs: [],
    classSlugs: [],
    projectSlugs: [],
    skills: row.skills ?? [],
    tools: row.tools ?? [],
  }));

  return { items, source: "supabase" };
}

export async function getRoadmap(slug: string): Promise<{ item: RoadmapItem | null; error?: string }> {
  const catalog = await getRoadmaps();
  const item = catalog.items.find((roadmap) => roadmap.slug === slug) ?? null;
  if (!item || catalog.source === "local") return { item, error: catalog.error };

  const supabase = getSupabaseServerClient();
  if (!supabase) return { item };
  const { data: roadmapRow } = await supabase.from("roadmaps").select("id").eq("slug", slug).eq("published", true).single();
  if (!roadmapRow) return { item };

  const [{ data: stages }, { data: programRows }, { data: classRows }, { data: projectRows }] = await Promise.all([
    supabase.from("roadmap_steps").select("title,description,display_order").eq("roadmap_id", roadmapRow.id).order("display_order", { ascending: true }),
    supabase.from("roadmap_programs").select("programs(slug)").eq("roadmap_id", roadmapRow.id),
    supabase.from("roadmap_classes").select("classes(slug)").eq("roadmap_id", roadmapRow.id),
    supabase.from("roadmap_projects").select("projects(slug)").eq("roadmap_id", roadmapRow.id),
  ]);
  const slugs = (rows: unknown[] | null, relation: "programs" | "classes" | "projects") => (rows ?? []).flatMap((entry) => {
    const record = entry as Record<string, { slug: string } | { slug: string }[] | null | undefined>;
    const value = record[relation];
    if (Array.isArray(value)) return value.map((row) => row.slug);
    return value?.slug ? [value.slug] : [];
  });

  return {
    item: {
      ...item,
      steps: stages?.length ? stages.map((stage) => stage.title) : item.steps,
      stepDescriptions: stages?.length ? stages.map((stage) => stage.description) : item.stepDescriptions,
      programSlugs: slugs(programRows, "programs"),
      classSlugs: slugs(classRows, "classes"),
      projectSlugs: slugs(projectRows, "projects"),
    },
  };
}

export function findRelatedLocalContent(item: ProgramItem | RoadmapItem) {
  if ("outcomes" in item) {
    return {
      projects: item.projectSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project) => project !== undefined),
    };
  }

  return {
    programs: item.programSlugs.map((slug) => programs.find((program) => program.slug === slug)).filter((program) => program !== undefined),
    classes: item.classSlugs.map((slug) => classes.find((course) => course.slug === slug)).filter((course) => course !== undefined),
    projects: item.projectSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project) => project !== undefined),
  };
}