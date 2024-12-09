'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components';

const App = () => {
  const router = useRouter();

  return (
    <div className='relative flex flex-col items-center justify-between min-h-screen bg-[#FF8D22] text-white overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-24 sm:h-32 bg-[#ff800a]' />
      <div
        className='absolute top-6 sm:top-8 left-0 w-full h-20 sm:h-24 bg-[#FF8D22]'
        style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%',
        }}
      />
      <div className='pt-12 sm:pt-20 z-10'>
        <h1 className='text-4xl sm:text-5xl font-bold text-center font-[GmarketSans] leading-relaxed'>
          2025 <br /> 쏭-춘쿠키
        </h1>
      </div>
      <div className='flex flex-col items-center py-8 sm:py-12'>
        <div className='relative w-full max-w-[500px] aspect-square px-4'>
          <Image src='/snake.svg' alt='Snake' fill className='object-contain' />
        </div>
        <p className='mt-6 sm:mt-8 text-xl sm:text-2xl text-center font-medium px-4'>
          2025년 내가 가장 원하는 것을 <br />
          얻게 해줄 노래를 들어보세요
        </p>
      </div>
      <div className='w-full max-w-[500px] px-4 sm:px-6 pb-6 sm:pb-8'>
        <Button onClick={() => router.push('/login')} variant='start'>
          뽑기 시작하기
        </Button>
      </div>
    </div>
  );
};

export default App;
