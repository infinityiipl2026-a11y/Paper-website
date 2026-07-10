"use client";

import React from "react";
import OrigamiCard from "./OrigamiCard";
import type { OrigamiItem } from "../data/origami";

type Props = { items: OrigamiItem[] };

export default function OrigamiGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <OrigamiCard key={it.id} item={it} />
      ))}
    </div>
  );
}
