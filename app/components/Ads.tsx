import { useEffect } from 'react';

const AdFit = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adScript = document.createElement('script');
      adScript.src = '//t1.daumcdn.net/kas/static/ba.min.js';
      adScript.async = true;
      document.body.appendChild(adScript);
    }
  }, []);

  return (
    <ins
      className='kakao_ad_area'
      style={{ display: 'none' }}
      data-ad-unit='DAN-JWxtPuO6RBoTT1tA'
      data-ad-width='320'
      data-ad-height='100'
    ></ins>
  );
};

export default AdFit;
