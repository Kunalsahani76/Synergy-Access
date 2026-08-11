import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.anpr,
    canonical: 'https://www.synergy-access.com/products/anpr-solution',
});

export default function AnprSolutionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
