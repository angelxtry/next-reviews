import { Heading } from '@/components/heading';
import { ShareLinkButton } from '@/components/share-link-button';
import { getReview } from '@/libs/review';

interface Props {
  params: { slug: string };
}

const generateMetadata = async ({ params: { slug } }: Props) => {
  const { title } = await getReview(slug);
  return {
    title,
  };
};

const ReviewPage = async ({ params: { slug } }: Props) => {
  const { title, date, image, body } = await getReview(slug);

  return (
    <div>
      <Heading>{title}</Heading>
      <div className="flex items-baseline gap-3">
        <p className="pb-2 italic">{date}</p>
        <ShareLinkButton />
      </div>
      <img src={image} alt={title} width="640" height="360" className="mb-2 rounded" />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </div>
  );
};

export { generateMetadata };
export default ReviewPage;
