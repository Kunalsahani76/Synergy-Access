import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.fullHeightTurnstile,
    canonical: 'https://www.synergy-access.com/products/full-height-turnstile',
});

export default function FullHeightTurnstileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
