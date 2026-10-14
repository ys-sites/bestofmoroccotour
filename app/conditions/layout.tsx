import type { Metadata } from "next";
import JsonLd from "../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

// page.tsx is a client component, so its metadata lives here
export const metadata: Metadata = pageMetadata({
  title: "Terms & Conditions — Conditions générales",
  description: "Best of Morocco Tours terms of business: booking and payment schedule, cancellations and refunds, children fares, travel insurance, travel documents and traveler responsibilities.",
  path: "/conditions",
});

export default function ConditionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/conditions" },
        ])}
      />
      {children}
    </>
  );
}
