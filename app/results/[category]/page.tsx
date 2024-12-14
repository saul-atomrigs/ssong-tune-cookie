'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

import { Ads, Badge, Button } from '@/app/components';
import useUserStore from '@/store/userStore';
import songsData from '@/db.json';
import { getYoutubeEmbedUrl, pickRandomSong } from '@/utils';
import type { SongData } from '@/types';
import { categoryMapping } from '@/constants';

const ResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSong, setSelectedSong] = useState<SongData | null>(null);

  const router = useRouter();
  const params = useParams();
  const { name } = useUserStore();
  const category = params.category
    ? decodeURIComponent(params.category as string)
    : 'unknown';

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomSong = pickRandomSong(category, songsData);
      setSelectedSong(randomSong);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [category]);

  const handleShare = async () => {
    const youtubeLink = selectedSong?.youtubeUrl;

    if (navigator.share) {
      try {
        await navigator.share({
          title: '2025년 내 운세 보러가기',
          text: '새해 나의 운세를 확인하고, 나에게 맞는 노래를 들어보세요!',
          url: youtubeLink,
        });
      } catch (error) {
        console.log('Share Error:', error);
      }
    } else {
      alert('공유가 지원하지 않습니다.');
    }
  };

  if (isLoading) {
    return (
      <main className='flex flex-col items-center h-[100dvh]'>
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
    <div className='flex flex-col h-[100dvh]'>
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
              {selectedSong && (
                <iframe
                  className='w-full h-full rounded-xl'
                  src={getYoutubeEmbedUrl(selectedSong.youtubeUrl)}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              )}
            </div>
            <div className='text-center'>
              <p className='font-bold text-xl'>{selectedSong?.song}</p>
              <p className='font-bold'>{selectedSong?.singer}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-[80%] max-w-sm gap-4 m-auto mb-5'>
        <Button onClick={handleShare} variant='primary'>
          공유하고 운 받아가기
        </Button>
        <Button onClick={() => router.push('/list')} variant='secondary'>
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
