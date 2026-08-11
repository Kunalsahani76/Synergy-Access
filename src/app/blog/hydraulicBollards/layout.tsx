import { Metadata } from 'next';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateBlogMetadata(
    'Hydraulic Bollards - Ultimate Vehicle Control Solution',
    'Learn about hydraulic bollards for vehicle access control, security perimeters, and anti-ram protection. Installation and maintenance guide included.',
    [
        'hydraulic bollards',
        'automatic bollards',
        'vehicle control bollards',
        'security bollards',
        'retractable bollards',
        'anti-ram bollards'
    ],
    '2024-01-25T00:00:00Z'
);

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
