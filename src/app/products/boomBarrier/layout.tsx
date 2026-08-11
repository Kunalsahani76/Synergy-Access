import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.boomBarrier,
    canonical: 'https://www.synergy-access.com/products/boomBarrier',
});

export default function BoomBarrierLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
