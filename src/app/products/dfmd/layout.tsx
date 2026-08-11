import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.dfmd,
    canonical: 'https://www.synergy-access.com/products/dfmd',
});

export default function DfmdLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
