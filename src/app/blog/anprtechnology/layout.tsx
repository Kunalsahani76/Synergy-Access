import { Metadata } from 'next';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateBlogMetadata(
    'ANPR Technology - Automatic Number Plate Recognition Guide',
    'Complete guide to ANPR (Automatic Number Plate Recognition) technology. Learn how ANPR systems work, their applications, and benefits for parking and security.',
    [
        'ANPR technology',
        'automatic number plate recognition',
        'ANPR system guide',
        'license plate recognition',
        'ANPR parking',
        'vehicle tracking system'
    ],
    '2024-02-10T00:00:00Z'
);

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
