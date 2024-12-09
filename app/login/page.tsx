'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { TextInput, Button, Ads } from '@/app/components';
import useUserStore from '@/store/userStore';

const TEXT_LIMIT = 8;
const ALLOWED_PATTERN = /^[ㄱ-ㅎ가-힣a-zA-Z\s!@#$%^&*(),.?":{}|<>]*$/;

export default function Login() {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length <= TEXT_LIMIT && ALLOWED_PATTERN.test(value)) {
      setText(value);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = () => {
    if (text.length > 0) {
      useUserStore.getState().setName(text);
      router.push('/list');
    }
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-1 flex items-center justify-center p-5'>
        <div className='flex flex-col items-center space-y-5'>
          <Image
            src='/fortune-cookie.svg'
            alt='Fortune Cookie'
            width={160}
            height={154}
            priority
          />
          <h1 className='text-2xl font-bold font-[GmarketSans]'>
            노래 포춘쿠키 🎶
          </h1>
          <div className='w-[55%] text-center'>
            <p className='text-xs'>
              2025년 내가 가장 원하는 것을 얻게 해줄 노래를 들어보세요
            </p>
          </div>
          <TextInput
            value={text}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tag='이름'
          />
          <Button onClick={handleSubmit} disabled={text.length === 0}>
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
