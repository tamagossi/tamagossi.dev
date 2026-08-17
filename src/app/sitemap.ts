import type { MetadataRoute } from "next";

import { posts } from "@/lib/posts";

export const dynamic = "force-static";

const SITE_URL = "https://tamagossi.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/case-studies/ventura-ui", priority: 0.8 },
    { path: "/case-studies/nextjs-migration", priority: 0.8 },
    { path: "/case-studies/team-restructuring", priority: 0.8 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      changeFrequency: "monthly" as const,
      lastModified: new Date(),
      priority: route.priority,
      url: `${SITE_URL}${route.path}`,
    })),
    ...posts.map((post) => ({
      changeFrequency: "monthly" as const,
      lastModified: new Date(),
      priority: 0.6,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  ];
}
