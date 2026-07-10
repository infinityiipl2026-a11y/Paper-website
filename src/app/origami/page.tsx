"use client";

import React, { useMemo, useState } from "react";
import { origamiData } from "../../data/origami";
import FilterBar from "../../components/FilterBar";
import OrigamiGrid from "../../components/OrigamiGrid";

export default function OrigamiPage() {
  const [opts, setOpts] = useState({ q: "", difficulty: "", category: "" });

  const categories = useMemo(() => {
    return Array.from(new Set(origamiData.map((i) => i.category)));
  }, []);

  const filtered = useMemo(() => {
    return origamiData.filter((it) => {
      if (opts.q && !it.title.toLowerCase().includes(opts.q.toLowerCase())) return false;
      if (opts.difficulty && it.difficulty !== opts.difficulty) return false;
      if (opts.category && it.category !== opts.category) return false;
      return true;
    });
  }, [opts]);

  return (
    <div className="page-bg">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 pt-12 pb-20">
        <header className="mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl mb-2">Origami Tutorials</h1>
          <p className="text-slate">Browse traditional origami projects by difficulty and category.</p>
        </header>

        <FilterBar categories={categories} onChange={(o) => setOpts(o)} />

        <div className="mb-6 text-sm text-slate">Showing {filtered.length} tutorials</div>

        <OrigamiGrid items={filtered} />
      </div>
    </div>
  );
}
