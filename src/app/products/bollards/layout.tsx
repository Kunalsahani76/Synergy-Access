import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.bollards,
    canonical: 'https://www.synergy-access.com/products/bollards',
});

export default function BollardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
