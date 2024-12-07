'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Ads } from '@/app/components';

const ListPage = () => {
  const router = useRouter();

  const items = [
    { text: '돈', emoji: '💰' },
    { text: '사랑', emoji: '❤️' },
    { text: '지식', emoji: '📚' },
    { text: '커리어', emoji: '💼' },
    { text: '외모', emoji: '✨' },
    { text: '건강', emoji: '💪' },
    { text: '합격', emoji: '🎯' },
    { text: '명예', emoji: '🏆' },
  ];

  const handleClick = (item: string) => {
    router.push(`/results/${item}`);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1 flex items-center justify-center p-5 pb-24'>
        <div className='flex flex-col items-center space-y-7'>
          <h1 className='text-lg font-bold text-center w-[55%]'>
            2025년 내가 가장 얻고 싶은 것은?
          </h1>
          <div className='grid grid-cols-2 gap-2 w-full'>
            {items.map(({ text, emoji }) => (
              <div
                key={text}
                onClick={() => handleClick(text)}
                className='box flex flex-col items-center justify-center p-4 bg-[#FAE1DA] cursor-pointer hover:opacity-80 w-full'
              >
                <span className='text-2xl mb-1'>{emoji}</span>
                <span className='text-md font-bold'>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 left-0 right-0 px-5 pb-5'>
        <Ads />
      </div>
    </div>
  );
};

export default ListPage;
