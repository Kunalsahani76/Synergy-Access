import type { ReactNode } from 'react';

export default function TestLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <h2>Test Layout - No Header/Footer</h2>
      {children}
    </div>
  );
}