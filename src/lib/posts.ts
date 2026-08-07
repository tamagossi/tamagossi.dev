export interface Post {
  date: string;
  excerpt: string;
  tags: string[];
  title: string;
}

// Sample posts — replace with real writing when ready.
export const posts: Post[] = [
  {
    date: "2026-07-20",
    excerpt:
      "A design system is never finished — it ships, gets adopted, and evolves with the product. Lessons from running Ventura UI across 3 squads.",
    tags: ["Design Systems", "Frontend"],
    title: "Design Systems Are a Product, Not a Project",
  },
  {
    date: "2026-06-12",
    excerpt:
      "You don't need an ML team to ship AI features. What it actually takes: disciplined API integration, error handling, and product thinking.",
    tags: ["AI", "Node.js", "APIs"],
    title: "Shipping AI Features Without an ML Team",
  },
  {
    date: "2026-05-03",
    excerpt:
      "Moving a client portal from atomic design to domain-driven design — what changed, what broke, and why the codebase got easier to navigate.",
    tags: ["DDD", "React", "Architecture"],
    title: "From Atomic Design to DDD: A Migration Story",
  },
];
