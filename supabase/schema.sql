create table if not exists public.programs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null,
  short_description text,
  tagline text,
  category text not null,
  level text not null check (level in ('Beginner', 'Intermediate', 'Advanced')),
  image_url text,
  price numeric(10, 2) not null default 49,
  duration text,
  focus text[] not null default '{}',
  outcomes text[] not null default '{}',
  skills text[] not null default '{}',
  tools text[] not null default '{}',
  featured boolean not null default false,
  published boolean not null default false,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.roadmaps (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text not null,
  category text not null,
  level text not null check (level in ('Beginner', 'Intermediate', 'Advanced')),
  image_url text,
  skills text[] not null default '{}',
  tools text[] not null default '{}',
  featured boolean not null default false,
  published boolean not null default false,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.program_modules (
  id uuid primary key default gen_random_uuid(),
  program_id uuid not null references public.programs(id) on delete cascade,
  title text not null,
  description text not null default '',
  display_order integer not null default 0
);

create table if not exists public.roadmap_steps (
  id uuid primary key default gen_random_uuid(),
  roadmap_id uuid not null references public.roadmaps(id) on delete cascade,
  step_number integer not null,
  title text not null,
  description text not null default '',
  type text not null default 'stage',
  display_order integer not null default 0,
  unique (roadmap_id, step_number)
);

create table if not exists public.roadmap_programs (
  roadmap_id uuid not null references public.roadmaps(id) on delete cascade,
  program_id uuid not null references public.programs(id) on delete cascade,
  primary key (roadmap_id, program_id)
);

create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  published boolean not null default false
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  published boolean not null default false
);

create table if not exists public.roadmap_classes (
  roadmap_id uuid not null references public.roadmaps(id) on delete cascade,
  class_id uuid not null references public.classes(id) on delete cascade,
  primary key (roadmap_id, class_id)
);

create table if not exists public.roadmap_projects (
  roadmap_id uuid not null references public.roadmaps(id) on delete cascade,
  project_id uuid not null references public.projects(id) on delete cascade,
  primary key (roadmap_id, project_id)
);

create table if not exists public.program_projects (
  program_id uuid not null references public.programs(id) on delete cascade,
  project_id uuid not null references public.projects(id) on delete cascade,
  primary key (program_id, project_id)
);

alter table public.programs enable row level security;
alter table public.roadmaps enable row level security;
alter table public.program_modules enable row level security;
alter table public.roadmap_steps enable row level security;
alter table public.roadmap_programs enable row level security;
alter table public.classes enable row level security;
alter table public.projects enable row level security;
alter table public.roadmap_classes enable row level security;
alter table public.roadmap_projects enable row level security;
alter table public.program_projects enable row level security;

grant select on public.programs, public.roadmaps, public.program_modules, public.roadmap_steps,
  public.roadmap_programs, public.classes, public.projects, public.roadmap_classes,
  public.roadmap_projects, public.program_projects to anon, authenticated, service_role;
grant insert, update, delete on public.programs, public.roadmaps, public.program_modules,
  public.roadmap_steps, public.roadmap_programs, public.roadmap_classes,
  public.roadmap_projects, public.program_projects to service_role;

drop policy if exists "Public can read published programs" on public.programs;
drop policy if exists "Public can read published roadmaps" on public.roadmaps;
drop policy if exists "Public can read modules of published programs" on public.program_modules;
drop policy if exists "Public can read stages of published roadmaps" on public.roadmap_steps;
drop policy if exists "Public can read published roadmap program links" on public.roadmap_programs;
drop policy if exists "Public can read published classes" on public.classes;
drop policy if exists "Public can read published projects" on public.projects;
drop policy if exists "Public can read published roadmap class links" on public.roadmap_classes;
drop policy if exists "Public can read published roadmap project links" on public.roadmap_projects;
drop policy if exists "Public can read published program project links" on public.program_projects;

create policy "Public can read published programs" on public.programs for select using (published = true);
create policy "Public can read published roadmaps" on public.roadmaps for select using (published = true);
create policy "Public can read modules of published programs" on public.program_modules for select using (
  exists (select 1 from public.programs where programs.id = program_id and programs.published = true)
);
create policy "Public can read stages of published roadmaps" on public.roadmap_steps for select using (
  exists (select 1 from public.roadmaps where roadmaps.id = roadmap_id and roadmaps.published = true)
);
create policy "Public can read published roadmap program links" on public.roadmap_programs for select using (
  exists (select 1 from public.roadmaps where roadmaps.id = roadmap_id and roadmaps.published = true)
);
create policy "Public can read published classes" on public.classes for select using (published = true);
create policy "Public can read published projects" on public.projects for select using (published = true);
create policy "Public can read published roadmap class links" on public.roadmap_classes for select using (
  exists (select 1 from public.roadmaps where roadmaps.id = roadmap_id and roadmaps.published = true)
);
create policy "Public can read published roadmap project links" on public.roadmap_projects for select using (
  exists (select 1 from public.roadmaps where roadmaps.id = roadmap_id and roadmaps.published = true)
);
create policy "Public can read published program project links" on public.program_projects for select using (
  exists (select 1 from public.programs where programs.id = program_id and programs.published = true)
);