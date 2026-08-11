import { Metadata } from 'next';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateBlogMetadata(
    'Smart Parking Management Systems - Complete Guide',
    'Discover smart parking solutions for modern cities. Learn about automated parking systems, RFID integration, and real-time monitoring technologies.',
    [
        'smart parking',
        'parking management system',
        'automated parking',
        'smart city parking',
        'parking technology',
        'RFID parking'
    ],
    '2024-03-05T00:00:00Z'
);

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
