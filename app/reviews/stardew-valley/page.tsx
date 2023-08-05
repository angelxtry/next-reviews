import { Heading } from '@/components/heading';

const StardewValleyPage = () => {
  return (
    <div>
      <Heading>Stardew Valley</Heading>
      <img
        src="/images/stardew-valley.jpg"
        alt="stardew valley"
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>This will be the review for Stardew Valley</p>
    </div>
  );
};

export default StardewValleyPage;
