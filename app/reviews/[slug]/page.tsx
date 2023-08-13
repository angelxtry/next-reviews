import Image from 'next/image';
import { notFound } from 'next/navigation';

import { Heading } from '@/components/heading';
import { ShareLinkButton } from '@/components/share-link-button';
import { getReview } from '@/libs/review';

interface Props {
  params: { slug: string };
}

const dynamic = 'force-dynamic';

const generateMetadata = async ({ params: { slug } }: Props) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return {
    title: review.title,
  };
};

const ReviewPage = async ({ params: { slug } }: Props) => {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }

  const { title, subtitle, date, image, body } = review;

  return (
    <div>
      <Heading>{title}</Heading>
      <p className="pb-3 font-semibold">{subtitle}</p>
      <div className="flex items-baseline gap-3">
        <p className="pb-2 italic">{date}</p>
        <ShareLinkButton />
      </div>
      <Image src={image} alt={title} priority width="640" height="360" className="mb-2 rounded" />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </div>
  );
};

export { generateMetadata, dynamic };
export default ReviewPage;
