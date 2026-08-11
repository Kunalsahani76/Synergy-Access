import { Metadata } from 'next';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateBlogMetadata(
    'Perimeter Security Systems - Comprehensive Protection Guide',
    'Complete guide to perimeter security systems including fencing, sensors, cameras, and access control for maximum facility protection.',
    [
        'perimeter security',
        'perimeter protection',
        'security fencing',
        'intrusion detection',
        'facility security',
        'perimeter sensors'
    ],
    '2024-02-20T00:00:00Z'
);

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
