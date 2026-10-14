import type { Metadata } from "next";
import JsonLd from "../components/json-ld";
import CancellationClient from "./CancellationClient";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cancellation Policy — Politique d'annulation",
  description: "Best of Morocco Tours cancellation policy: charges by notice period (15%, 25%, 50%, no refund within 2 weeks), free transfers 60+ days out, and refund timing.",
  path: "/cancellation-policy",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Cancellation Policy", path: "/cancellation-policy" },
        ])}
      />
      <CancellationClient />
    </>
  );
}
