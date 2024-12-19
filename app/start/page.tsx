'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components';

const App = () => {
  const router = useRouter();

  return (
    <div className='relative text-white h-[100dvh]'>
      <div className='h-full overflow-y-auto'>
        <div className='flex flex-col items-center'>
          <div className='pt-8 sm:pt-16'>
            <h1 className='text-4xl sm:text-5xl font-bold text-center font-[ChangwonDangamAsac] leading-relaxed'>
              2025 <br /> 쏭-춘쿠키
            </h1>
          </div>
          <div className='flex flex-col items-center py-4 sm:py-8'>
            <div className='relative w-full max-w-[500px] aspect-square px-4'>
              <Image
                src='/snake.svg'
                alt='Snake'
                fill
                className='object-contain'
              />
            </div>
            <p className='mt-4 sm:mt-6 text-xl sm:text-2xl text-center font-medium px-4'>
              2025년 내가 가장 원하는 것을 <br />
              얻게 해줄 노래를 들어보세요
            </p>
          </div>
        </div>
      </div>
      <div className='w-full max-w-[500px] px-4 sm:px-6 fixed bottom-0 left-1/2 -translate-x-1/2 py-3'>
        <Button onClick={() => router.push('/login')} variant='start'>
          뽑기 시작하기
        </Button>
      </div>
    </div>
  );
};

export default App;
