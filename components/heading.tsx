import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}
const Heading = ({ children }: HeadingProps) => (
  <h1 className="pb-3 font-orbitron text-2xl font-bold">{children}</h1>
);

export { Heading };
