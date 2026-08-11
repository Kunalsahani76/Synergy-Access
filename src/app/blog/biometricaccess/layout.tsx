import { Metadata } from 'next';
import { generateBlogMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateBlogMetadata(
    'Biometric Access Control - Future of Security Gates',
    'Explore biometric access control systems including fingerprint, face recognition, and iris scanning for advanced security management.',
    [
        'biometric access control',
        'biometric security',
        'fingerprint access',
        'face recognition access',
        'biometric gates',
        'touchless access control'
    ],
    '2024-03-15T00:00:00Z'
);

export default function BlogPostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
