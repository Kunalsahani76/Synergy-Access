import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.tripodTurnstile,
    canonical: 'https://www.synergy-access.com/products/tripod-turnstile',
});

export default function TripodTurnstileLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
