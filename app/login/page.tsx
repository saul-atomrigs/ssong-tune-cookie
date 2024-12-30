'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TextInput, Button, Ads } from '@/app/components';
import useUserStore from '@/store/userStore';

const TEXT_LIMIT = 8;
// const ALLOWED_PATTERN = /^[0-9a-zA-Z가-힣ㆍᆞᆢㄱ-ㅎㅏ-ㅣ\x20]*$/gi;

export default function Login() {
  const { name } = useUserStore();
  const [username, setUsername] = useState(name);
  const [, setIsFocused] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length <= TEXT_LIMIT) {
      setUsername(value);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (username.length > 0) {
      useUserStore.getState().setName(username);
      router.push('/list');
    }
  };

  return (
    <div className='flex flex-col h-[100dvh]'>
      <div className='flex-1 flex items-center justify-center p-5'>
        <div className='flex flex-col items-center space-y-5 w-full max-w-sm'>
          <Image
            src='/fortune-cookie.svg'
            alt='Fortune Cookie'
            width={0}
            height={0}
            className='w-[160px] h-auto sm:w-[200px] md:w-[240px] [@media(max-height:500px)]:hidden'
            priority
          />
          <h1 className='text-2xl font-bold font-[Paperlogy] text-[#FFF8EC] flex items-center gap-2'>
            노래 포춘쿠키
            <Image
              src='/music-note.svg'
              alt='Music Note'
              width={24}
              height={24}
              className='inline-block'
            />
          </h1>
          <div className='text-center'>
            <p className='text-xs text-[#FFF8EC] font-[Paperlogy] leading-5'>
              2025년 내가 가장 원하는 것을 <br /> 얻게 해줄 노래를 들어보세요
            </p>
          </div>
          <TextInput
            value={username}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tag='이름'
          />
          <Button onClick={handleSubmit} disabled={username.length === 0}>
            다음
          </Button>
        </div>
      </div>
      <div className='px-5 pb-5'>
        <Ads />
      </div>
    </div>
  );
}
