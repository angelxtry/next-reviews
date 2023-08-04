import Link from 'next/link';

import { Heading } from '@/components/heading';

const ReviewsPage = () => {
  return (
    <div>
      <Heading>Reviews</Heading>
      <ul>
        <li>
          <Link href="/reviews/hollow-knight">Hollow Knight</Link>
        </li>
        <li>
          <Link href="/reviews/stardew-valley">Stardew Valley</Link>
        </li>
      </ul>
    </div>
  );
};

export default ReviewsPage;
