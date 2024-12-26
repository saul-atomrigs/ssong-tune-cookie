'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components';

const App = () => {
  const router = useRouter();

  return (
    <div className='relative h-[100dvh]'>
      <div className='h-full flex flex-col'>
        <div className='flex-1 flex flex-col items-center justify-center gap-2'>
          <h1 className='text-5xl sm:text-7xl [@media(max-height:600px)]:text-3xl font-bold text-center font-[ChangwonDangamAsac] text-[#FFFBE6] leading-tight mb-2'>
            2025 <br /> 쏭-춘쿠키
          </h1>
          <div className='relative w-[100vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] [@media(max-height:600px)]:w-[60vw] aspect-[4/3] [@media(max-height:500px)]:aspect-[5/3]'>
            <Image
              src='/snake.svg'
              alt='Snake'
              fill
              className='object-contain'
            />
          </div>
          <p className='text-md sm:text-xl [@media(max-height:600px)]:text-sm text-[#FFFBE6] text-center font-medium font-[Paperlogy] px-4'>
            2025년 내가 가장 원하는 것을 <br />
            얻게 해줄 노래를 들어보세요
          </p>
          <div className='w-full max-w-[500px] [@media(max-height:600px)]:max-w-[300px] px-4 sm:px-6 py-3 mt-2'>
            <Button onClick={() => router.push('/login')} variant='start'>
              뽑기 시작하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
