import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.sirenSystem,
    canonical: 'https://www.synergy-access.com/products/siren-system',
});

export default function SirenSystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
