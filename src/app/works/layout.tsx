import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Selected projects by Etincelle — dashboards, automations, AI tools, and digital redesigns for Toronto service businesses.",
  openGraph: {
    title: "Works | Etincelle",
    description:
      "Selected projects by Etincelle — dashboards, automations, AI tools, and digital redesigns.",
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
