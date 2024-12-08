'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Ads, Badge, Button } from '@/app/components';
import useUserStore from '@/store/userStore';

const ResultPage = () => {
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
        <div className='flex-1 flex items-center justify-center'>
          <p className='text-xl'>쿠키 고르는 중..</p>
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
        <h1 className='text-2xl font-bold text-center'>
          2025년 명예를 원하는
          <br />
          {name}님을 위한 노래
        </h1>

        <div className='relative w-full max-w-[500px]'>
          <Image
            src='/white.svg'
            alt='White background'
            width={500}
            height={500}
            className='w-full h-auto'
          />
          <div className='absolute inset-0 flex flex-col items-center justify-center space-y-4'>
            <Badge backgroundColor='#FFE7E3' textColor='#C35424'>
              {category}운
            </Badge>
            <div className='w-full max-w-[250px] aspect-video'>
              <iframe
                className='w-full h-full'
                src='https://www.youtube.com/embed/HjagNSnWHPw'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
            <div className='text-center'>
              <p className='font-bold'>듣기만 해도 성공하는 음악</p>
              <p className='text-sm text-gray-600'>조빈</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-[80%] max-w-sm gap-4 m-auto mb-5'>
        <Button onClick={handleShare} variant='primary'>
          공유하고 운 받아가기
        </Button>
        <Button onClick={() => router.push('/')} variant='secondary'>
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
