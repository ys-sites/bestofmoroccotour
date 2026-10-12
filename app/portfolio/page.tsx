import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  alternates: { canonical: "/portfolio" },
  robots: { index: false, follow: false },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
