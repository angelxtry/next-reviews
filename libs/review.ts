import { readFile } from 'node:fs/promises';

import matter from 'gray-matter';
import { marked } from 'marked';

const getReview = async (slug: string) => {
  const text = await readFile(`./contents/reviews/${slug}.md`, 'utf-8');
  const { content, data } = matter(text);
  const { title, date, image } = data as { title: string; date: string; image: string };
  const body = marked(content);
  return { title, date, image, body };
};

export { getReview };
