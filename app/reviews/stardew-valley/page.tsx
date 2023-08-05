import { Heading } from '@/components/heading';
import { getReview } from '@/libs/review';

const StardewValleyPage = async () => {
  const { title, date, image, body } = await getReview('stardew-valley');

  return (
    <div>
      <Heading>{title}</Heading>
      <p className="pb-2 italic">{date}</p>
      <img src={image} alt={title} width="640" height="360" className="mb-2 rounded" />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </div>
  );
};

export default StardewValleyPage;
