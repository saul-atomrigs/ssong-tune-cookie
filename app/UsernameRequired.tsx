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
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!name && !publicPaths.includes(pathname)) {
      redirect('/start');
    }
    setIsAuthorized(true);
  }, [name, pathname]);

  if (!isAuthorized && !publicPaths.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
}
