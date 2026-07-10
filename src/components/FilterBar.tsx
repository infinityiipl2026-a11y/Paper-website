"use client";

import React, { useState, useEffect } from "react";

type Props = {
  categories: string[];
  onChange: (opts: { q: string; difficulty: string; category: string }) => void;
};

export default function FilterBar({ categories, onChange }: Props) {
  const [q, setQ] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => onChange({ q, difficulty, category }), 120);
    return () => clearTimeout(timeout);
  }, [q, difficulty, category, onChange]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search tutorials..."
        className="w-full sm:max-w-md px-4 py-2 rounded-md border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-forest"
      />

      <div className="flex gap-3 items-center">
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-200 bg-white"
        >
          <option value="">All difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-200 bg-white"
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
