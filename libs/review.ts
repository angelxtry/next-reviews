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

const getSlugs = async () => {
  const files = await readdir('./contents/reviews');
  return files.filter((file) => file.endsWith('.md')).map((file) => file.replace('.md', ''));
};

const getReviews = async () => {
  const slugs = await getSlugs();
  const reviews = await Promise.all(slugs.map((slug) => getReview(slug)));
  return reviews.sort((a, b) => b.date.localeCompare(a.date));
};

const getFeaturedReviews = async () => {
  const reviews = await getReviews();
  return reviews[0];
};

export { getReview, getSlugs, getReviews, getFeaturedReviews };
