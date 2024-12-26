'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import Image from 'next/image';

import { Ads, Button, ShareLinkModal } from '@/app/components';
import { categoryMapping } from '@/constants';
import songsData from '@/db.json';
import cookieAnimation from '@/public/cookie-animation.json';
import useUserStore from '@/store/userStore';
import type { SongData } from '@/types';
import { getYoutubeEmbedUrl, pickRandomSong } from '@/utils';

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
    }, 3000);

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

  const handleRetry = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push('/list');
  };

  if (isLoading) {
    return (
      <main className='grid h-[100dvh] grid-rows-[1fr,auto]'>
        <div className='flex flex-col items-center justify-center -mt-20'>
          <h1 className='text-lg sm:text-xl font-[Paperlogy] text-[#FFF8EC] mb-4'>
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
      <div className='flex-1 flex flex-col items-center py-6 [@media(max-height:640px)]:pt-4 space-y-6 [@media(max-height:640px)]:space-y-4'>
        <h1 className='text-xl [@media(max-height:640px)]:text-lg text-center font-[Paperlogy-Bold] text-[#FFF8EC]'>
          2025년{' '}
          <span className='text-[#FFEF4C]'>{categoryMapping[category]}</span>을
          원하는
          <br />
          <span className='text-[#FFEF4C]'>{name}</span>님을 위한 노래
        </h1>

        <div className='relative w-full max-w-[500px]'>
          <div
            className='w-[80%] mx-auto aspect-[1.16/1] bg-[#FFF8EC] shadow-[4px_4px_12px_0px_#FFB87F3D] relative'
            style={{ transform: 'rotate(2.26deg)' }}
          >
            <Image
              src='/cookie-up.svg'
              alt='Cookie'
              width={75}
              height={80}
              className='absolute -top-2 -left-12'
            />
            <Image
              src='/cookie-bottom.svg'
              alt='Cookie'
              width={80}
              height={80}
              className='absolute -bottom-5 -right-11'
            />
          </div>
          <div
            className='absolute inset-0 flex flex-col items-center justify-center space-y-4'
            style={{ transform: 'rotate(2.26deg)' }}
          >
            <div className='w-[70%] aspect-video'>
              {selectedSong && (
                <iframe
                  className='w-full h-full'
                  src={getYoutubeEmbedUrl(selectedSong.youtubeUrl)}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              )}
            </div>
            <div className='text-center'>
              <p className='font-bold text-xl [@media(max-height:640px)]:text-md'>
                {selectedSong?.song}
              </p>
              <p className='font-bold [@media(max-height:640px)]:text-sm'>
                {selectedSong?.singer}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col w-[80%] max-w-sm gap-2 m-auto mb-5'>
        <Button onClick={handleShare} variant='primary'>
          뽑기 공유하고 운 받아가기
        </Button>
        <Button onClick={handleRetry} variant='secondary'>
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
