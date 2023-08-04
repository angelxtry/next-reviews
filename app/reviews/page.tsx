import Link from 'next/link';

const ReviewsPage = () => {
  return (
    <div>
      <h1>Reviews</h1>
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
