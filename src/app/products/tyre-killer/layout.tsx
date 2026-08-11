import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.tyreKiller,
    canonical: 'https://www.synergy-access.com/products/tyre-killer',
});

export default function TyreKillerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
