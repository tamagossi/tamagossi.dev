declare module "*.mdx" {
  export const metadata: {
    date: string;
    excerpt: string;
    tags: string[];
    title: string;
  };
}
