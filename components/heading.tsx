import { ReactNode } from 'react';

import { orbitron } from '@/app/fonts';

interface HeadingProps {
  children: ReactNode;
}
const Heading = ({ children }: HeadingProps) => (
  <h1 className={`pb-3 text-2xl font-bold ${orbitron.className}`}>{children}</h1>
);

export { Heading };
