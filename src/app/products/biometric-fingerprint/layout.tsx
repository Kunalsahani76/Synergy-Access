import { Metadata } from 'next';
import { generateMetadata, productMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    ...productMetadata.biometricAccess,
    canonical: 'https://www.synergy-access.com/products/biometric-fingerprint',
});

export default function BiometricFingerprintLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
