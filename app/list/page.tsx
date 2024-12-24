'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Ads } from '@/app/components';

const ListPage = () => {
  const router = useRouter();

  const items = [
    { text: '돈', icon: '/money.svg' },
    { text: '사랑', icon: '/love.svg' },
    { text: '지식', icon: '/knowledge.svg' },
    { text: '커리어', icon: '/career.svg' },
    { text: '여행', icon: '/travel.svg' },
    { text: '건강', icon: '/health.svg' },
    { text: '합격', icon: '/pass.svg' },
    { text: '명예', icon: '/star.svg' },
  ];

  const handleClick = (item: string) => {
    router.push(`/results/${item}`);
  };

  return (
    <div className='flex flex-col h-[100dvh]'>
      <div className='flex-1 flex items-center justify-center p-3 pb-24'>
        <div className='flex flex-col items-center space-y-7 w-full max-w-sm'>
          <h1 className='text-2xl font-bold text-center font-[Paperlogy] text-[#FFF8EC]'>
            2025년 가장 얻고
            <br />
            싶은 것은 무엇인가요?
          </h1>
          <div className='grid grid-cols-2 gap-3 w-full h-full'>
            {items.map(({ text, icon }) => (
              <div
                key={text}
                onClick={() => handleClick(text)}
                className='flex flex-col items-center justify-center p-3 bg-[#FFECD5] cursor-pointer hover:opacity-80 rounded-lg'
              >
                <div className='relative w-10 h-10 mb-2'>
                  <Image
                    src={icon}
                    alt={text}
                    fill
                    className='object-contain'
                  />
                </div>
                <span className='text-md font-bold'>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
