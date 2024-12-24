'use client';

import Script from 'next/script';

function KakaoScript() {
  const onLoad = () => {
    window.Kakao.init(process.env.KAKAO_API_KEY);
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
