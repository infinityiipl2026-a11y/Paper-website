"use client";

import Link from "next/link";
import React from "react";
import { Bird, Flower, Gift, Box, Star, Zap, PawPrint, Heart } from "lucide-react";
import type { OrigamiItem } from "../data/origami";

type Props = { item: OrigamiItem };

const IconMap: Record<string, any> = {
  Bird,
  Flower,
  Gift,
  Box,
  Star,
  Zap,
  PawPrint,
  Heart,
};

export default function OrigamiCard({ item }: Props) {
  const Icon = IconMap[item.icon] || Star;

  return (
    <Link
      href="/origami"
      className="group block rounded-lg bg-white shadow-sm hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
    >
      <div className="p-5 h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-md bg-forest/10 text-forest">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-ink text-lg">{item.title}</h3>
          </div>
          <span className="text-sm text-slate">{item.time}</span>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-slate">
          <span className="px-3 py-1 rounded-full bg-paper text-ink">{item.difficulty}</span>
          <span className="italic">{item.category}</span>
        </div>

        <div className="mt-4 text-xs text-slate flex-1 flex items-end">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">View tutorial</span>
        </div>
      </div>
    </Link>
  );
}
