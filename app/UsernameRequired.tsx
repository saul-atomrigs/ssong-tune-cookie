'use client';

import { redirect, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useUserStore from '@/store/userStore';

const publicPaths = ['/start', '/login'];

export default function UsernameRequired({
  children,
}: {
  children: React.ReactNode;
}) {
  const { name } = useUserStore();
  const pathname = usePathname();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated && !name && !publicPaths.includes(pathname)) {
      redirect('/start');
    }
  }, [isHydrated, name, pathname]);

  // Don't render anything until hydration is complete
  if (!isHydrated) {
    return null;
  }

  // After hydration, check if we're on a public path or if user has a name
  if (!publicPaths.includes(pathname) && !name) {
    return null;
  }

  return <>{children}</>;
}
