import { readFile } from 'node:fs/promises';

import { marked } from 'marked';

import { Heading } from '@/components/heading';

const StardewValleyPage = async () => {
  const text = await readFile('./contents/reviews/stardew-valley.md', 'utf-8');
  const html = marked(text);

  return (
    <div>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt="stardew valley"
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: html }}
        className="prose prose-slate max-w-screen-sm"
      />
    </div>
  );
};

export default StardewValleyPage;
