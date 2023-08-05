import Link from 'next/link';

import { Heading } from '@/components/heading';

const ReviewsPage = () => {
  return (
    <div>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="w-80 rounded border bg-white font-orbitron font-semibold shadow hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt="hollow knight"
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="py-1 text-center">Hollow Knight</h2>
          </Link>
        </li>
        <li className="w-80 rounded border bg-white font-orbitron font-semibold shadow hover:shadow-xl ">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt="stardew valley"
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="py-1 text-center">Stardew Valley</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ReviewsPage;
