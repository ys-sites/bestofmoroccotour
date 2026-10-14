import type { Metadata } from "next";
import JsonLd from "../components/json-ld";
import AboutClient from "./AboutClient";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us — Morocco Tour Operator",
  description: "Best of Morocco Tours is a wholly Moroccan-owned incoming tour operator: life-seeing with local services, handpicked hotels and riads, and 20+ years of experience across Morocco.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <AboutClient />
    </>
  );
}
