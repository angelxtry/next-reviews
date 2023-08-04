import { ReactNode } from 'react';

interface ReviewsLayoutProps {
  children: ReactNode;
}
const ReviewsLayout = ({ children }: ReviewsLayoutProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: '1px solid orangered' }}>[reviews menubar]</div>
      {children}
    </div>
  );
};

export default ReviewsLayout;
