import type { ComponentType } from "react";

import HelloWorld, {
  metadata as helloWorldMeta,
} from "@/posts/hello-world.mdx";

export interface PostMeta {
  date: string;
  excerpt: string;
  tags: string[];
  title: string;
}

export interface Post extends PostMeta {
  Content: ComponentType;
  slug: string;
}

export const posts: Post[] = [
  {
    Content: HelloWorld,
    date: helloWorldMeta.date,
    excerpt: helloWorldMeta.excerpt,
    slug: "hello-world",
    tags: helloWorldMeta.tags,
    title: helloWorldMeta.title,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
