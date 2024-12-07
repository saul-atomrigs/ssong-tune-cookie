import { Ads } from '@/app/components';

export default function Loading() {
  return (
    <main className='flex flex-col items-center min-h-screen'>
      <div className='flex-1 flex items-center justify-center'>
        <p className='text-xl'>쿠키 고르는 중..</p>
      </div>
      <div className='w-full px-5 pb-5'>
        <Ads />
      </div>
    </main>
  );
}
