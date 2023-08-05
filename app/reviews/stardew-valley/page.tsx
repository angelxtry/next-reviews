import { readFile } from 'node:fs/promises';

import matter from 'gray-matter';
import { marked } from 'marked';

import { Heading } from '@/components/heading';

const StardewValleyPage = async () => {
  const text = await readFile('./contents/reviews/stardew-valley.md', 'utf-8');
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const html = marked(content);

  return (
    <div>
      <Heading>{title}</Heading>
      <p className="pb-2 italic">{date}</p>
      <img src={image} alt={title} width="640" height="360" className="mb-2 rounded" />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose prose-slate max-w-screen-sm"
      />
    </div>
  );
};

export default StardewValleyPage;
