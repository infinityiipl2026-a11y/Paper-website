"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/site-config";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-forest sticky top-0 z-50 shadow-[0_3px_16px_rgba(0,0,0,0.18)]">
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-10 py-4 px-4 list-none">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative pb-1 text-sm font-semibold uppercase tracking-wide text-cream transition-colors duration-300 hover:text-gold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  isActive
                    ? "text-gold! after:w-full border-b-2 border-gold"
                    : "after:w-0"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
