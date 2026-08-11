import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Synergy Access Reviews & Features - Company Profile & Product Specifications',
    description: 'Read Synergy Access reviews, product features, and specifications. Learn about our company profile, mission, values, and commitment to security since 2019. Customer testimonials and real-world performance analysis.',
    keywords: [
        'Synergy Access reviews',
        'synergy access features',
        'synergy access specifications',
        'synergy access product comparisons',
        'synergy access real world use',
        'synergy access testimonials',
        'about synergy access',
        'company profile',
        'customer reviews',
        'product features',
        'specifications',
        'performance analysis',
        'entrance automation company',
        'access control manufacturer',
        'security solutions provider',
        'ISO certified security company'
    ],
    canonical: 'https://www.synergy-access.com/about',
});

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
