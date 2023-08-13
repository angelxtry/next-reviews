import Image from 'next/image';
import Link from 'next/link';

import { Heading } from '@/components/heading';
import { getReviews } from '@/libs/review';

const metadata = {
  title: 'Reviews',
};

const ReviewsPage = async () => {
  const reviews = await getReviews();

  return (
    <div>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map(({ slug, title, image }, index) => (
          <li
            key={slug}
            className="w-80 rounded border bg-white font-orbitron font-semibold shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${slug}`}>
              <Image
                src={image}
                alt={title}
                priority={index === 0}
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="py-1 text-center">{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { metadata };
export default ReviewsPage;
