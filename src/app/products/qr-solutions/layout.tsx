import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.qrSolution,
    canonical: 'https://www.synergy-access.com/products/qr-solutions',
});

export default function QrSolutionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
