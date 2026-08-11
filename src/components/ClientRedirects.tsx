'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const redirectMap: Record<string, string> = {
  '/services/pedestrian-access-management': '/products/tripod-turnstile',
  '/team/kyle-sapien': '/about',
  '/coming-soon': '/',
  '/sliding-barrier-boom-barrier': '/products/boomBarrier',
  '/services/p-type-swing-barrier-p90': '/products/p-type-swing-barrier',
  '/synergy-access-pvt-ltd': '/synergy-access',
  '/synergyaccess': '/synergy-access',
  '/services': '/assistance',
  '/news-blog': '/blog'
};

export default function ClientRedirects() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const redirectTo = redirectMap[pathname];
    if (redirectTo) {
      router.replace(redirectTo);
    }
  }, [pathname, router]);

  return null;
}