'use client';

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLang, translate } from "../context/lang-context";

export interface BreadcrumbItem {
  name: { FR: string; EN: string };
  path: string;
}

// Visible trail; the matching BreadcrumbList schema is emitted by the server page
export default function Breadcrumbs({ items, className = "" }: { items: BreadcrumbItem[]; className?: string }) {
  const { lang } = useLang();

  return (
    <nav aria-label={lang === "FR" ? "Fil d'Ariane" : "Breadcrumb"} className={className}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] tracking-widest uppercase font-semibold">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className="text-white/80">
                  {translate(item.name, lang)}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="text-brand-gold hover:text-white transition-colors">
                    {translate(item.name, lang)}
                  </Link>
                  <ChevronRight className="w-3 h-3 text-brand-gold/60" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
