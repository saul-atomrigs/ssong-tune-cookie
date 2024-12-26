'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/app/components';
import Lottie from 'react-lottie-player';
import sunAnimation from '@/public/sun-motion.json';

const App = () => {
  const router = useRouter();

  return (
    <div className='relative h-[100dvh]'>
      <div className='h-full flex flex-col'>
        <div className='flex-1 flex flex-col items-center justify-center gap-2'>
          <h1 className='text-5xl sm:text-7xl [@media(max-height:600px)]:text-3xl font-bold text-center font-[ChangwonDangamAsac] text-[#FFFBE6] leading-tight mb-2'>
            2025 <br /> 쏭-춘쿠키
          </h1>
          <div className='relative w-[100vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] [@media(max-height:660px)]:w-[90vw] aspect-[4/3] [@media(max-height:500px)]:aspect-[5/3] flex items-center justify-center'>
            <Lottie
              animationData={sunAnimation}
              play
              loop
              className='absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] z-0'
            />
            <Image
              src='/snake.svg'
              alt='Snake'
              width={800}
              height={600}
              className='w-full h-full object-contain relative z-10'
            />
          </div>
          <p className='text-md sm:text-xl [@media(max-height:660px)]:text-sm text-[#FFFBE6] text-center font-medium font-[Paperlogy] px-4 mt-2'>
            2025년 내가 가장 원하는 것을 <br />
            얻게 해줄 노래를 들어보세요
          </p>
          <div className='w-full max-w-[500px] [@media(max-height:660px)]:max-w-[300px] px-4 sm:px-6 py-3 mt-2'>
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
