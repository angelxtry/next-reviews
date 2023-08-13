import Image from 'next/image';
import Link from 'next/link';

import { Heading } from '@/components/heading';
import { getReviews } from '@/libs/review';

const metadata = {
  title: 'Home',
};

const HomePage = async () => {
  const reviews = await getReviews(3);

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <ul className="flex flex-col gap-3">
        {reviews.map(({ slug, title, image }, index) => (
          <li
            key={slug}
            className="w-80 rounded border bg-white font-orbitron font-semibold shadow hover:shadow-xl sm:w-full"
          >
            <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row">
              <Image
                src={image}
                alt={title}
                priority={index === 0}
                width="320"
                height="180"
                className="rounded-t sm:rounded-l sm:rounded-r-none"
              />
              <h2 className="py-1 text-center sm:px-2">{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export { metadata };
export default HomePage;
