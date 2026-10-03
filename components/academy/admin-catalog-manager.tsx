import type { ProgramItem, RoadmapItem } from "@academy/data/site-data";
import { createProgram, createRoadmap, deleteProgram, deleteRoadmap, updateProgram, updateRoadmap } from "@academy/app/admin/actions";

type FieldProps = {
  label: string;
  name: string;
  defaultValue?: string | number;
  type?: "text" | "number" | "url";
  required?: boolean;
  step?: string;
  min?: string;
};

function Field({ label, name, defaultValue, type = "text", required = false, step, min }: FieldProps) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      <input className="admin-input" name={name} type={type} defaultValue={defaultValue} required={required} step={step} min={min} />
    </label>
  );
}

function TextareaField({ label, name, defaultValue = "", required = false }: Omit<FieldProps, "type" | "step" | "min">) {
  return (
    <label className="admin-field admin-field-wide">
      <span>{label}</span>
      <textarea className="admin-input admin-textarea" name={name} defaultValue={defaultValue} required={required} rows={3} />
    </label>
  );
}

function LevelField({ defaultValue = "Beginner" }: { defaultValue?: ProgramItem["level"] }) {
  return (
    <label className="admin-field">
      <span>Level</span>
      <select className="admin-input" name="level" defaultValue={defaultValue}>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </label>
  );
}

function PublishFields({ published, featured }: { published: boolean; featured: boolean }) {
  return (
    <div className="admin-checkbox-row">
      <label><input type="checkbox" name="published" defaultChecked={published} /> Published</label>
      <label><input type="checkbox" name="featured" defaultChecked={featured} /> Featured</label>
    </div>
  );
}

function ProgramFields({ program }: { program?: ProgramItem }) {
  return (
    <div className="admin-fields-grid">
      <Field label="Title" name="title" defaultValue={program?.title} required />
      <Field label="Slug" name="slug" defaultValue={program?.slug} required />
      <Field label="Category" name="category" defaultValue={program?.category ?? "Technology"} required />
      <LevelField defaultValue={program?.level ?? "Beginner"} />
      <Field label="Price (₹)" name="price" type="number" min="0" step="0.01" defaultValue={program?.price ?? 49} required />
      <Field label="Display order" name="displayOrder" type="number" step="1" defaultValue={program?.displayOrder ?? 0} required />
      <Field label="Duration" name="duration" defaultValue={program?.duration ?? ""} />
      <Field label="Image URL" name="imageUrl" type="url" defaultValue={program?.imageUrl ?? ""} />
      <Field label="Tagline" name="tagline" defaultValue={program?.tagline ?? ""} />
      <TextareaField label="Short description" name="shortDescription" defaultValue={program?.shortDescription ?? ""} required />
      <TextareaField label="Description" name="description" defaultValue={program?.description ?? ""} required />
      <TextareaField label="Focus areas (comma or line separated)" name="focus" defaultValue={program?.focus.join("\n")} />
      <TextareaField label="Learning outcomes (comma or line separated)" name="outcomes" defaultValue={program?.outcomes.join("\n")} />
      <TextareaField label="Skills (comma or line separated)" name="skills" defaultValue={program?.skills.join("\n")} />
      <TextareaField label="Tools (comma or line separated)" name="tools" defaultValue={program?.tools.join("\n")} />
      <PublishFields published={program?.published ?? false} featured={program?.featured ?? false} />
    </div>
  );
}

function RoadmapFields({ roadmap }: { roadmap?: RoadmapItem }) {
  return (
    <div className="admin-fields-grid">
      <Field label="Title" name="title" defaultValue={roadmap?.title} required />
      <Field label="Slug" name="slug" defaultValue={roadmap?.slug} required />
      <Field label="Category" name="category" defaultValue={roadmap?.category ?? "Technology"} required />
      <LevelField defaultValue={roadmap?.level ?? "Beginner"} />
      <Field label="Display order" name="displayOrder" type="number" step="1" defaultValue={roadmap?.displayOrder ?? 0} required />
      <Field label="Image URL" name="imageUrl" type="url" defaultValue={roadmap?.imageUrl ?? ""} />
      <TextareaField label="Description" name="description" defaultValue={roadmap?.description ?? ""} required />
      <TextareaField label="Stages (one per line: title | description)" name="stages" defaultValue={roadmap?.steps.map((stage, index) => `${stage}${roadmap.stepDescriptions?.[index] ? ` | ${roadmap.stepDescriptions[index]}` : ""}`).join("\n") ?? "Start\nFoundation\nPractice\nProject\nAdvanced\nCareer"} required />
      <TextareaField label="Skills (comma or line separated)" name="skills" defaultValue={roadmap?.skills.join("\n")} />
      <TextareaField label="Tools (comma or line separated)" name="tools" defaultValue={roadmap?.tools.join("\n")} />
      <PublishFields published={roadmap?.published ?? false} featured={roadmap?.featured ?? false} />
    </div>
  );
}

export function AdminCatalogManager({ programs, roadmaps, canWrite }: { programs: ProgramItem[]; roadmaps: RoadmapItem[]; canWrite: boolean }) {
  if (!canWrite) {
    return (
      <section className="admin-write-setup" aria-labelledby="admin-write-setup-title">
        <span className="eyebrow">Read-only mode</span>
        <h2 id="admin-write-setup-title">Connect the server write key to manage the catalog.</h2>
        <p>Add <code>SUPABASE_SERVICE_ROLE_KEY</code> to `.env.local` and restart Next.js. Keep this secret server-side; never add a `NEXT_PUBLIC_` prefix.</p>
      </section>
    );
  }

  return (
    <div className="admin-managers">
      <section className="admin-manager-section" aria-labelledby="admin-programs-title">
        <div className="admin-manager-heading"><div><span className="eyebrow">Catalog management</span><h2 id="admin-programs-title">Programs <span>{programs.length}</span></h2></div></div>
        <details className="admin-create-panel">
          <summary>Create a program <span aria-hidden="true">+</span></summary>
          <form action={createProgram}>
            <ProgramFields />
            <button type="submit" className="button button-primary">Create program</button>
          </form>
        </details>
        <div className="admin-record-list">
          {programs.map((program) => (
            <details className="admin-record" key={program.slug}>
              <summary><span><strong>{program.title}</strong><small>{program.category} · {program.level} · {program.published ? "Published" : "Draft"}</small></span><b aria-hidden="true">Edit</b></summary>
              <form action={updateProgram}>
                <input type="hidden" name="originalSlug" value={program.slug} />
                <ProgramFields program={program} />
                <button type="submit" className="button button-primary">Save program</button>
              </form>
              <details className="admin-delete-panel">
                <summary>Delete {program.title}</summary>
                <p>This permanently deletes the program and its linked records.</p>
                <form action={deleteProgram}><input type="hidden" name="slug" value={program.slug} /><button type="submit" className="button button-danger">Confirm delete</button></form>
              </details>
            </details>
          ))}
        </div>
      </section>

      <section className="admin-manager-section" aria-labelledby="admin-roadmaps-title">
        <div className="admin-manager-heading"><div><span className="eyebrow">Learning direction</span><h2 id="admin-roadmaps-title">Roadmaps <span>{roadmaps.length}</span></h2></div></div>
        <details className="admin-create-panel">
          <summary>Create a roadmap <span aria-hidden="true">+</span></summary>
          <form action={createRoadmap}>
            <RoadmapFields />
            <button type="submit" className="button button-primary">Create roadmap</button>
          </form>
        </details>
        <div className="admin-record-list">
          {roadmaps.map((roadmap) => (
            <details className="admin-record" key={roadmap.slug}>
              <summary><span><strong>{roadmap.title}</strong><small>{roadmap.category} · {roadmap.level} · {roadmap.published ? "Published" : "Draft"}</small></span><b aria-hidden="true">Edit</b></summary>
              <form action={updateRoadmap}>
                <input type="hidden" name="originalSlug" value={roadmap.slug} />
                <RoadmapFields roadmap={roadmap} />
                <button type="submit" className="button button-primary">Save roadmap</button>
              </form>
              <details className="admin-delete-panel">
                <summary>Delete {roadmap.title}</summary>
                <p>This permanently deletes the roadmap and its linked stages.</p>
                <form action={deleteRoadmap}><input type="hidden" name="slug" value={roadmap.slug} /><button type="submit" className="button button-danger">Confirm delete</button></form>
              </details>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}