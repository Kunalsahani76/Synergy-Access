import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
    title: 'EV Charger Solutions - Electric Vehicle Charging Stations',
    description: 'Smart EV charging solutions for residential and commercial parking lots. Install electric vehicle charging stations with integrated parking management.',
    keywords: [
        'EV charger',
        'electric vehicle charging',
        'EV charging station',
        'smart charging',
        'parking EV charger',
        'commercial EV charging'
    ],
    canonical: 'https://www.synergy-access.com/evcharger',
});

export default function EvChargerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
