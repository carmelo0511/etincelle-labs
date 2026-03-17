import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog | AI Insights for Business Owners — Etincelle Labs",
  description:
    "Practical insights on AI agents, automation, and operations for business owners. Learn how AI receptionists, chatbots, and review managers can save you time and grow your business.",
  openGraph: {
    title: "Blog — Etincelle Labs",
    description:
      "Practical insights on AI agents, automation, and operations for business owners.",
  },
};

const posts = [
  {
    title: "How Much Does an AI Receptionist Cost in 2026?",
    slug: "how-much-does-ai-receptionist-cost",
    date: "March 10, 2026",
    category: "Guide",
    excerpt:
      "A breakdown of AI receptionist pricing — from DIY tools to fully managed solutions — so you can find the right fit for your business and budget.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="lg:ml-[200px]">
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28 lg:px-8 lg:pt-32">
            {/* Header */}
            <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[3.5rem] lg:text-[4rem]">
              Blog
            </h1>
            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-text-secondary">
              Practical insights on AI agents, automation, and operations for business owners.
            </p>

            {/* Posts */}
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-4 border-t border-border-light pt-6 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-medium uppercase tracking-widest text-text-muted">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-text-muted">{post.date}</span>
                  </div>
                  <h2 className="text-[20px] font-medium leading-snug text-text-primary group-hover:text-text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
