import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Customer Support & Assistance - 24/7 Help',
    description: 'Get technical support and assistance for your Synergy Access products. Our expert team is available to help with installation, maintenance, and troubleshooting.',
    keywords: [
        'customer support',
        'technical assistance',
        'product support',
        'installation help',
        'maintenance service',
        'troubleshooting',
        '24/7 support'
    ],
    canonical: 'https://www.synergy-access.com/assistance',
});

export default function AssistanceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
