import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | AI Systems That Actually Work — Etincelle Labs Toronto",
  description:
    "Real AI systems built for real businesses. See how Etincelle Labs automates operations with AI agents, dashboards, and workflow automation.",
  openGraph: {
    title: "Case Studies | AI Systems That Actually Work — Etincelle Labs Toronto",
    description:
      "Real AI systems built for real businesses. See how Etincelle Labs automates operations with AI agents, dashboards, and workflow automation.",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
