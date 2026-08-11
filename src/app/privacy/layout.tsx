import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Privacy Policy - Data Protection & Privacy',
    description: 'Privacy policy of Synergy Access Pvt. Ltd. Learn how we collect, use, and protect your personal information and data.',
    keywords: ['privacy policy', 'data protection', 'GDPR compliance', 'data security'],
    canonical: 'https://www.synergy-access.com/privacy',
    noIndex: false,
});

export default function PrivacyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
