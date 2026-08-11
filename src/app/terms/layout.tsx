import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Terms & Conditions - Service Agreement',
    description: 'Terms and conditions for using Synergy Access products and services. Read our service agreement and terms of use.',
    keywords: ['terms and conditions', 'terms of service', 'service agreement', 'terms of use'],
    canonical: 'https://www.synergy-access.com/terms',
    noIndex: false,
});

export default function TermsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
