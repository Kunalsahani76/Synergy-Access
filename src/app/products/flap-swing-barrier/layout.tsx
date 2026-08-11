import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.flapBarrier,
    canonical: 'https://www.synergy-access.com/products/flap-swing-barrier',
});

export default function FlapSwingBarrierLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
