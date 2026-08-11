import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://tamagossi.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/case-studies/ventura-ui", priority: 0.8 },
    { path: "/case-studies/nextjs-migration", priority: 0.8 },
    { path: "/case-studies/team-restructuring", priority: 0.8 },
  ];

  return routes.map((route) => ({
    changeFrequency: "monthly",
    lastModified: new Date(),
    priority: route.priority,
    url: `${SITE_URL}${route.path}`,
  }));
}
