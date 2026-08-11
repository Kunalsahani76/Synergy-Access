import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'Blog - Security & Automation Insights',
    description: 'Expert insights on entrance automation, access control, parking management, and security systems. Stay updated with the latest trends in security technology.',
    keywords: [
        'security blog',
        'automation blog',
        'boom barrier tips',
        'parking management guide',
        'access control articles',
        'security trends',
        'turnstile guide',
        'entrance automation news'
    ],
    canonical: 'https://www.synergy-access.com/blog',
});

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
