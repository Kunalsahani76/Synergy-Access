import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Synergy Access Noida Contact - Office Location & Sales Enquiries',
    description: 'Contact Synergy Access Noida office for sales enquiries, support, and consultation. Get in touch with our experts for security and automation solutions. Office locations: Noida, Jamnagar, Mumbai. Call +91 99993 39265.',
    keywords: [
        'Synergy Access Noida contact',
        'synergy access noida office',
        'synergy access contact info',
        'synergy access office locations',
        'synergy access support',
        'synergy access sales enquiries',
        'synergy access noida address',
        'contact synergy access',
        'noida office address',
        'sales inquiry',
        'customer support',
        'technical support',
        'consultation services'
    ],
    canonical: 'https://www.synergy-access.com/contact',
});

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
