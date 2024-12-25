import React from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any;
  }
}

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const SHARE_URL = 'https://ssong-tune-cookie.vercel.app/';

  const shareToKakao = () => {
    try {
      const { Kakao } = window;
      Kakao.Share.sendScrap({
        requestUrl: SHARE_URL,
      });
    } catch (error) {
      console.log('Kakao Error:', error);
    }
  };

  const shareToInstagram = () => {
    const text = encodeURIComponent(
      '2025년 대박나러 가기 - 내가 원하는 운세를 가져다 줄 새해 노래를 들어보세요! '
    );
    const url = encodeURIComponent(SHARE_URL);
    const instagramUrl = `https://www.instagram.com/?text=${text}&url=${url}`;
    window.open(instagramUrl, '_blank');
  };

  const shareToX = () => {
    const text = encodeURIComponent(
      '2025년 대박나러 가기 - 내가 원하는 운세를 가져다 줄 새해 노래를 들어보세요! '
    );
    const url = encodeURIComponent(SHARE_URL);
    const xShareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(xShareUrl, '_blank');
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      {/* 모달 컨텐츠 */}
      <div className='bg-white rounded-lg shadow-lg w-80'>
        {/* 헤더 */}
        <div className='text-center p-5'>
          <h2 className='text-lg font-bold mb-2'>링크가 복사되었어요!</h2>
          <p className='text-sm text-gray-500'>원하는 곳에 공유해보세요</p>
        </div>

        {/* 공유 아이콘들 */}
        <div className='flex justify-around px-5 mb-4'>
          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={shareToKakao}
          >
            <img
              src='/kakaotalk.svg'
              alt='카카오톡'
              className='w-12 h-12 mb-1'
            />
            <span className='text-xs'>카카오톡</span>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={shareToInstagram}
          >
            <img
              src='/instagram.svg'
              alt='Instagram'
              className='w-12 h-12 mb-1'
            />
            <span className='text-xs'>Instagram</span>
          </div>

          <div
            className='flex flex-col items-center cursor-pointer'
            onClick={shareToX}
          >
            <img src='/x.svg' alt='X' className='w-12 h-12 mb-1' />
            <span className='text-xs'>X</span>
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div className='text-center border-t border-gray-200'>
          <button
            onClick={onClose}
            className='w-full py-3 text-sm font-medium text-gray-600 hover:bg-gray-100'
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
