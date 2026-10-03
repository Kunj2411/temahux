"use client";

import { useState } from "react";
import { ProgramCard } from "@/components/program-card";
import type { ProgramItem } from "@/data/site-data";

const categories = ["All", "STEM", "Coding", "Robotics", "AI", "AR / VR", "Technology", "Career"];

export function ProgramBrowser({ programs }: { programs: ProgramItem[] }) {
  const [category, setCategory] = useState("All");
  const filtered = category === "All" ? programs : programs.filter((program) => program.category.toLowerCase() === category.toLowerCase());

  return (
    <>
      <div className="catalog-toolbar" aria-label="Filter programs by category">
        <div className="catalog-filters" role="group" aria-label="Program categories">
          {categories.map((value) => (
            <button key={value} type="button" className={category === value ? "is-selected" : ""} aria-pressed={category === value} onClick={() => setCategory(value)}>{value}</button>
          ))}
        </div>
        <span className="catalog-count">{filtered.length} {filtered.length === 1 ? "program" : "programs"}</span>
      </div>
      {filtered.length ? (
        <div className="program-grid">
          {filtered.map((program) => <ProgramCard key={program.slug} program={program} />)}
        </div>
      ) : (
        <div className="catalog-empty"><span className="eyebrow">Coming into focus</span><h2>No programs in this category yet.</h2><p>Choose another area to continue exploring.</p></div>
      )}
    </>
  );
}