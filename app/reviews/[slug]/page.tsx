import { Heading } from '@/components/heading';
import { getReview, getSlugs } from '@/libs/review';

interface Props {
  params: { slug: string };
}

const generateStaticParams = async () => {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
};

const generateMetadata = async ({ params: { slug } }: Props) => {
  const { title } = await getReview(slug);
  return {
    title,
  };
};

const ReviewPage = async ({ params: { slug } }: Props) => {
  const { title, date, image, body } = await getReview(slug);
  console.log('ReviewPage', slug);

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

export { generateStaticParams, generateMetadata };
export default ReviewPage;
