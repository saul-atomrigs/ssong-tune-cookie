interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className='w-full h-1 bg-[#eee] overflow-hidden'>
      <div
        className='h-full bg-[#F88D2F] relative ease-in-out'
        style={{
          width: `${progress}%`,
        }}
      >
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer' />
      </div>
    </div>
  );
};

export default ProgressBar;
