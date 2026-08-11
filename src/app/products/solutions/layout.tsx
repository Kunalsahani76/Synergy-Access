import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Security Solutions - Integrated Access Control Systems',
    description: 'Comprehensive security and access control solutions for commercial, industrial, and residential applications. Complete entrance automation packages.',
    keywords: [
        'security solutions',
        'integrated access control',
        'complete security systems',
        'entrance automation packages',
        'turnkey security solutions',
        'custom security systems'
    ],
    canonical: 'https://www.synergy-access.com/products/solutions',
});

export default function SolutionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
