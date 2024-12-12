'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Ads, Badge, Button, ProgressBar } from '@/app/components';
import useUserStore from '@/store/userStore';

const ResultPage = () => {
  const categoryMapping: { [key: string]: string } = {
    돈: '재물운',
    사랑: '애정운',
    지식: '학업운',
    커리어: '직장운',
    여행: '여행운',
    건강: '건강운',
    합격: '합격운',
    명예: '명예운',
  };

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const { name } = useUserStore();
  const category = params.category
    ? decodeURIComponent(params.category as string)
    : 'unknown';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleShare = async () => {
    const youtubeLink = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check out this video!',
          text: 'Here is a great video I found:',
          url: youtubeLink,
        });
        alert('Link shared successfully!');
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };

  if (isLoading) {
    return (
      <main className='flex flex-col items-center min-h-screen'>
        <ProgressBar progress={100} />
        <div className='flex-1 flex items-center justify-center flex-col gap-8'>
          <h1 className='text-xl font-[GmarketSans]'>쿠키 고르는 중..</h1>
          <Image
            src='/fortune-cookie.svg'
            alt='Fortune Cookie'
            width={160}
            height={154}
            className='transform -rotate-90 scale-x-[-1]'
          />
        </div>
        <div className='w-full px-5 pb-5'>
          <Ads />
        </div>
      </main>
    );
  }

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1 flex flex-col items-center pt-7 space-y-8'>
        <h1 className='text-2xl font-bold text-center font-[GmarketSans]'>
          2025년 {categoryMapping[category]}을 원하는
          <br />
          {name}님을 위한 노래
        </h1>

        <div className='relative w-full max-w-[500px]'>
          <Image
            src='/youtube-container.svg'
            alt='White background'
            width={500}
            height={500}
            className='w-full h-auto'
          />
          <div className='absolute inset-0 flex flex-col items-center justify-center space-y-4'>
            <Badge backgroundColor='#FFE7E3' textColor='#C35424'>
              {categoryMapping[category]}
            </Badge>
            <div className='w-[80%] aspect-video'>
              <iframe
                className='w-full h-full rounded-xl'
                src='https://www.youtube.com/embed/HjagNSnWHPw'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
            <div className='text-center'>
              <p className='font-bold text-xl'>듣기만 해도 성공하는 음악</p>
              <p className='font-bold'>조빈</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-[80%] max-w-sm gap-4 m-auto mb-5'>
        <Button onClick={handleShare} variant='primary'>
          공유하고 운 받아가기
        </Button>
        <Button onClick={() => router.push('/login')} variant='secondary'>
          더 뽑기
        </Button>
      </div>

      <div className='w-full px-5 pb-5'>
        <Ads />
      </div>
    </div>
  );
};

export default ResultPage;
