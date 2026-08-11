import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'P-Type Swing Barrier - Elegant Access Control Gates',
    description: 'Premium P-Type swing barriers for elegant pedestrian access control. Perfect for corporate offices, hotels, and modern facilities.',
    keywords: ['P-Type swing barrier', 'swing gate', 'optical barrier', 'speed gate', 'office turnstile'],
    canonical: 'https://www.synergy-access.com/products/p-type-swing-barrier',
});

export default function PTypeSwingBarrierLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
