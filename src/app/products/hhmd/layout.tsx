import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.hhmd,
    canonical: 'https://www.synergy-access.com/products/hhmd',
});

export default function HhmdLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
