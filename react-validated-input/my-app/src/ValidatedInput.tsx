import React, { useState } from 'react';
import './ValidatedInput.css';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';

export function ValidatedInput() {
  const [isValue, setIsValue] = useState('');
  let classNameCheck = 'hidden check';
  let classNameXMark = 'x-mark';
  let resposiveMessage = 'Password Required';

  if (isValue.length > 0 && isValue.length < 8) {
    resposiveMessage = 'Password too short';
    classNameCheck = 'hidden check';
    classNameXMark = 'x-mark';
  }
  if (isValue.length >= 8) {
    resposiveMessage = '';
    classNameCheck = 'check';
    classNameXMark = 'hidden';
  }

  return (
    <div className="flex w-full m-12">
      <label>
        <span className="header">Password</span>
        <div className="relative w-80">
          <div className="icons">
            <FaCheck className={classNameCheck} />
            <FaXmark className={classNameXMark} />
          </div>
          <input
            name="password"
            className="password"
            value={isValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
              setIsValue(e.target.value)
            }
          />
          <div className="absolute inset-y-0 right-2 flex items-center" />
        </div>
        <div className="p-1 text-red-700">{resposiveMessage}</div>
      </label>
    </div>
  );
}
