import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.faceRecognition,
    canonical: 'https://www.synergy-access.com/products/face-recognition',
});

export default function FaceRecognitionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
