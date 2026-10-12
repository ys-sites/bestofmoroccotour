import type { Metadata } from "next";
import MiceClient from "@/app/mice/MiceClient";
import JsonLd from "@/app/components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "MICE Corporate Services Morocco — Meetings & Events",
  description: "Corporate meetings, incentive travel, conferences, company retreats and product launches in Morocco, with end-to-end event management by M.E. Voyages.",
  path: "/mice",
  image: "/og/mice.jpg",
});

export default function MicePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "MICE", path: "/mice" },
        ])}
      />
      <MiceClient />
    </>
  );
}

export const dynamic = "force-dynamic";
