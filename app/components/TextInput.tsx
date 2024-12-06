import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  tag?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  onFocus,
  onBlur,
  tag,
}) => {
  return (
    <div className='w-full'>
      {tag && <label className='text-xs text-gray-950 mb-1'>{tag}</label>}
      <input
        type='text'
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder='이름을 입력해주세요'
        className={`w-full p-2 border text-xs text-black ${
          value ? 'border-blue-500' : 'border-gray-300'
        } rounded-lg`}
      />
    </div>
  );
};

export default TextInput;
