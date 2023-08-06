import Link from 'next/link';

import { Heading } from '@/components/heading';
import { getFeaturedReviews } from '@/libs/review';

const HomePage = async () => {
  const { slug, title, image } = await getFeaturedReviews();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="w-80 rounded border bg-white font-orbitron font-semibold shadow hover:shadow-xl sm:w-full">
        <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row">
          <img
            src={image}
            alt={title}
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="py-1 text-center sm:px-2">{title}</h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
