import { Metadata } from 'next';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateBlogMetadata(
    'Benefits of Using Automatic Boom Barriers',
    'Discover the key benefits of automatic boom barriers for parking management, access control, and security. Learn how boom barriers enhance safety and efficiency.',
    [
        'automatic boom barrier benefits',
        'boom barrier advantages',
        'parking barrier benefits',
        'access control benefits',
        'boom barrier security'
    ],
    '2024-01-15T00:00:00Z'
);

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
