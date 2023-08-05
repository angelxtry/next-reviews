import { Heading } from '@/components/heading';

const HollowKnightPage = () => {
  return (
    <div>
      <Heading>Hollow Knight</Heading>
      <img
        src="/images/hollow-knight.jpg"
        alt="hollow knight"
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>This will be the review for Hollow Knight</p>
    </div>
  );
};

export default HollowKnightPage;
