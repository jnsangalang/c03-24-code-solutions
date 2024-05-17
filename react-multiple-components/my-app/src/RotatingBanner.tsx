import { Banner } from './Banner';
import { NextButton } from './NextButton';
import { NumberedButtons } from './NumberedButtons';
import { PreviousButton } from './PreviousButton';
import { useState } from 'react';
export type Props = {
  items: string[];
};

export function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function handleNextClick() {
    if (currentIndex <= ((items.length - 1) % 6) - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
    } else {
      setCurrentIndex(0);
    }
  }

  function handlePrevClick() {
    if (currentIndex > 0 && currentIndex <= items.length) {
      console.log(currentIndex);
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(5);
    }
  }

  function handleButtonClick(butttonNumber: number) {
    setCurrentIndex(butttonNumber);
  }
  return (
    <>
      <Banner items={items[currentIndex]} />
      <PreviousButton onClick={handlePrevClick} />
      <NumberedButtons
        onClick={handleButtonClick}
        items={items}
        current={currentIndex}
      />
      <NextButton onClick={handleNextClick} />
    </>
  );
}
