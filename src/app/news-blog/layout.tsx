import { generateMetadata } from '@/lib/metadata';

export const metadata = generateMetadata({
  title: 'News & Blog - Synergy Access Industry Updates',
  description: 'Latest news, updates, and insights from Synergy Access about entrance automation, security systems, and industry trends.',
  keywords: [
    'synergy access news',
    'security industry news',
    'entrance automation blog',
    'access control updates',
    'parking system news',
    'industry insights',
    'technology updates'
  ],
  canonical: 'https://www.synergy-access.com/news-blog'
});

export default function NewsBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}