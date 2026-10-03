"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@academy/lib/auth/admin";
import { getSupabaseAdminClient } from "@academy/lib/supabase/admin";

const levels = ["Beginner", "Intermediate", "Advanced"] as const;

function value(formData: FormData, key: string) {
  const entry = formData.get(key);
  return typeof entry === "string" ? entry.trim() : "";
}

function list(formData: FormData, key: string) {
  return value(formData, key).split(/[\n,]/).map((item) => item.trim()).filter(Boolean);
}

function numberValue(formData: FormData, key: string, fallback = 0) {
  const rawValue = value(formData, key);
  if (!rawValue) return fallback;
  const parsed = Number(rawValue);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function validSlug(slug: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

function validLevel(level: string): level is (typeof levels)[number] {
  return levels.includes(level as (typeof levels)[number]);
}

async function requireWriter() {
  await requireAdmin();
  const supabase = getSupabaseAdminClient();
  if (!supabase) redirect("/academy/admin?error=service-config");
  return supabase;
}

function invalidateCatalog() {
  revalidatePath("/admin");
  revalidatePath("/");
  revalidatePath("/programs");
  revalidatePath("/roadmaps");
}

function redirectForDatabaseError(error: { code?: string }) {
  redirect(`/academy/admin?error=${error.code === "23505" ? "duplicate" : "write"}`);
}

function parseProgram(formData: FormData) {
  const slug = value(formData, "slug");
  const title = value(formData, "title");
  const description = value(formData, "description");
  const shortDescription = value(formData, "shortDescription");
  const category = value(formData, "category");
  const level = value(formData, "level");
  const price = numberValue(formData, "price", Number.NaN);
  const displayOrder = numberValue(formData, "displayOrder", Number.NaN);

  if (!validSlug(slug) || !title || !description || !category || !validLevel(level) || !Number.isFinite(price) || price < 0 || !Number.isInteger(displayOrder)) return null;

  return {
    slug,
    title,
    description,
    short_description: shortDescription || description,
    tagline: value(formData, "tagline") || shortDescription || description,
    category,
    level,
    image_url: value(formData, "imageUrl") || null,
    price,
    duration: value(formData, "duration") || null,
    focus: list(formData, "focus"),
    outcomes: list(formData, "outcomes"),
    skills: list(formData, "skills"),
    tools: list(formData, "tools"),
    featured: formData.get("featured") === "on",
    published: formData.get("published") === "on",
    display_order: displayOrder,
    updated_at: new Date().toISOString(),
  };
}

function parseRoadmap(formData: FormData) {
  const slug = value(formData, "slug");
  const title = value(formData, "title");
  const description = value(formData, "description");
  const category = value(formData, "category");
  const level = value(formData, "level");
  const displayOrder = numberValue(formData, "displayOrder", Number.NaN);
  const stages = value(formData, "stages").split("\n").map((line) => {
    const [title = "", ...descriptionParts] = line.split("|");
    return { title: title.trim(), description: descriptionParts.join("|").trim() };
  }).filter((stage) => stage.title);

  if (!validSlug(slug) || !title || !description || !category || !validLevel(level) || !Number.isInteger(displayOrder) || stages.length === 0) return null;

  return {
    record: {
      slug,
      title,
      description,
      category,
      level,
      image_url: value(formData, "imageUrl") || null,
      skills: list(formData, "skills"),
      tools: list(formData, "tools"),
      featured: formData.get("featured") === "on",
      published: formData.get("published") === "on",
      display_order: displayOrder,
      updated_at: new Date().toISOString(),
    },
    stages,
  };
}

async function saveRoadmapStages(supabase: Awaited<ReturnType<typeof getSupabaseAdminClient>> & object, roadmapId: string, stages: { title: string; description: string }[]) {
  const { error: upsertError } = await supabase.from("roadmap_steps").upsert(stages.map((stage, index) => ({
    roadmap_id: roadmapId,
    step_number: index + 1,
    title: stage.title,
    description: stage.description,
    type: "stage",
    display_order: index + 1,
  })), { onConflict: "roadmap_id,step_number" });
  if (upsertError) return upsertError;

  const { error: deleteError } = await supabase.from("roadmap_steps").delete().eq("roadmap_id", roadmapId).gt("step_number", stages.length);
  return deleteError;
}

export async function createProgram(formData: FormData) {
  const supabase = await requireWriter();
  const program = parseProgram(formData);
  if (!program) redirect("/academy/admin?error=invalid");

  const { error } = await supabase.from("programs").insert(program);
  if (error) redirectForDatabaseError(error);

  invalidateCatalog();
  redirect("/academy/admin?status=program-created");
}

export async function updateProgram(formData: FormData) {
  const supabase = await requireWriter();
  const originalSlug = value(formData, "originalSlug");
  const program = parseProgram(formData);
  if (!originalSlug || !program) redirect("/academy/admin?error=invalid");

  const { error } = await supabase.from("programs").update(program).eq("slug", originalSlug);
  if (error) redirectForDatabaseError(error);

  invalidateCatalog();
  redirect("/academy/admin?status=program-updated");
}

export async function deleteProgram(formData: FormData) {
  const supabase = await requireWriter();
  const slug = value(formData, "slug");
  if (!validSlug(slug)) redirect("/academy/admin?error=invalid");

  const { error } = await supabase.from("programs").delete().eq("slug", slug);
  if (error) redirectForDatabaseError(error);

  invalidateCatalog();
  redirect("/academy/admin?status=program-deleted");
}

export async function createRoadmap(formData: FormData) {
  const supabase = await requireWriter();
  const roadmap = parseRoadmap(formData);
  if (!roadmap) redirect("/academy/admin?error=invalid");

  const { data, error } = await supabase.from("roadmaps").insert(roadmap.record).select("id").single();
  if (error) redirectForDatabaseError(error);
  if (!data) redirect("/academy/admin?error=write");
  const stageError = await saveRoadmapStages(supabase, data.id, roadmap.stages);
  if (stageError) redirect("/academy/admin?error=write");

  invalidateCatalog();
  redirect("/academy/admin?status=roadmap-created");
}

export async function updateRoadmap(formData: FormData) {
  const supabase = await requireWriter();
  const originalSlug = value(formData, "originalSlug");
  const roadmap = parseRoadmap(formData);
  if (!originalSlug || !roadmap) redirect("/academy/admin?error=invalid");

  const { data, error } = await supabase.from("roadmaps").update(roadmap.record).eq("slug", originalSlug).select("id").single();
  if (error) redirectForDatabaseError(error);
  if (!data) redirect("/academy/admin?error=write");
  const stageError = await saveRoadmapStages(supabase, data.id, roadmap.stages);
  if (stageError) redirect("/academy/admin?error=write");

  invalidateCatalog();
  redirect("/academy/admin?status=roadmap-updated");
}

export async function deleteRoadmap(formData: FormData) {
  const supabase = await requireWriter();
  const slug = value(formData, "slug");
  if (!validSlug(slug)) redirect("/academy/admin?error=invalid");

  const { error } = await supabase.from("roadmaps").delete().eq("slug", slug);
  if (error) redirectForDatabaseError(error);

  invalidateCatalog();
  redirect("/academy/admin?status=roadmap-deleted");
}