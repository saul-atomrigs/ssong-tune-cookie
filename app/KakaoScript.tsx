'use client';

import Script from 'next/script';

function KakaoScript() {
  const onLoad = () => {
    // window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    window.Kakao.init('9e35ef94a17fdccf780a8b7bd2e8f3ce');
  };

  return (
    <Script
      src='https://developers.kakao.com/sdk/js/kakao.js'
      async
      onLoad={onLoad}
    />
  );
}

export default KakaoScript;
