import React from "react";
import Link from "next/link";
import OrigamiGrid from "./OrigamiGrid";
import { featuredOrigami } from "../data/origami";

export default function OrigamiSection() {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-heading">Origami DIY</h2>
        <Link href="/origami" className="text-forest font-semibold">
          View All →
        </Link>
      </div>

      <p className="text-slate max-w-2xl mb-8">
        Try simple, traditional origami tutorials — perfect for kids and
        beginners. Quick projects to spark creativity.
      </p>

      <OrigamiGrid items={featuredOrigami} />
    </section>
  );
}
