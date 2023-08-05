import { readFile, readdir } from 'node:fs/promises';

import matter from 'gray-matter';
import { marked } from 'marked';

const getReview = async (slug: string) => {
  const text = await readFile(`./contents/reviews/${slug}.md`, 'utf-8');
  const { content, data } = matter(text);
  const { title, date, image } = data as { title: string; date: string; image: string };
  const body = marked(content, { headerIds: false, mangle: false });
  return { slug, title, date, image, body };
};

const getReviews = async () => {
  const files = await readdir('./contents/reviews');
  const slugs = files.filter((file) => file.endsWith('.md')).map((file) => file.replace('.md', ''));
  return await Promise.all(slugs.map((slug) => getReview(slug)));
};

export { getReview, getReviews };
