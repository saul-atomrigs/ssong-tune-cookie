'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Lottie from 'react-lottie-player';

import { Ads, Badge, Button, ShareLinkModal } from '@/app/components';
import useUserStore from '@/store/userStore';
import songsData from '@/db.json';
import { getYoutubeEmbedUrl, pickRandomSong } from '@/utils';
import type { SongData } from '@/types';
import { categoryMapping } from '@/constants';
import cookieAnimation from '@/public/cookie-animation.json';

const ResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSong, setSelectedSong] = useState<SongData | null>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

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
    }, 1500);

    return () => clearTimeout(timer);
  }, [category]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '2025년 대박나러 가기',
          text: '내가 원하는 운세를 가져다 줄 새해 노래를 들어보세요!',
          url: 'https://ssong-tune-cookie.vercel.app/',
        });
      } catch (error) {
        console.log('Share Error:', error);
      }
    } else {
      setIsShareModalOpen(true);
    }
  };

  if (isLoading) {
    return (
      <main className='grid h-[100dvh] grid-rows-[1fr,auto]'>
        <div className='flex flex-col items-center justify-center -mt-20'>
          <h1 className='text-xl font-[Paperlogy] text-[#FFF8EC] mb-4'>
            쿠키 고르는 중..
          </h1>
          <Lottie loop animationData={cookieAnimation} play />
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
        <h1 className='text-2xl font-bold text-center font-[Paperlogy] text-[#FFF8EC]'>
          2025년{' '}
          <span className='text-[#FFEF4C]'>{categoryMapping[category]}</span>을
          원하는
          <br />
          <span className='text-[#FFEF4C]'>{name}</span>님을 위한 노래
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
          뽑기 공유하고 운 받아가기
        </Button>
        <Button onClick={() => router.push('/list')} variant='secondary'>
          다시 뽑기
        </Button>
      </div>

      <div className='w-full px-5 pb-5'>
        <Ads />
      </div>

      <ShareLinkModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
};

export default ResultPage;
