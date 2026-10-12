import type { Metadata } from "next";
import HeritageClient from "./HeritageClient";
import JsonLd from "../components/json-ld";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Morocco Heritage & Culture — 9 UNESCO World Heritage Sites",
  description: "Discover Morocco's 9 UNESCO World Heritage Sites, 4 imperial capitals, zellige and tadelakt craftsmanship, luxury riads and flights from North America.",
  path: "/heritage",
  image: "/og/heritage.jpg",
});

export default function HeritagePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Heritage", path: "/heritage" },
        ])}
      />
      <HeritageClient />
    </>
  );
}
