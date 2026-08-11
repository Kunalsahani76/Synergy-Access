import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.visitorManagement,
    canonical: 'https://www.synergy-access.com/products/visitor-management',
});

export default function VisitorManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
