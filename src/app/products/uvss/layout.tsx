import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.uvss,
    canonical: 'https://www.synergy-access.com/products/uvss',
});

export default function UvssLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
