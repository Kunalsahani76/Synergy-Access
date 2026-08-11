import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Consultancy Services - Security Solutions Experts',
    description: 'Expert consultancy services for entrance automation, access control, and security system planning. Get professional advice for your security projects.',
    keywords: [
        'security consultancy',
        'access control consulting',
        'parking automation consultant',
        'security system planning',
        'entrance automation expert',
        'security audit'
    ],
    canonical: 'https://www.synergy-access.com/consultancy',
});

export default function ConsultancyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
