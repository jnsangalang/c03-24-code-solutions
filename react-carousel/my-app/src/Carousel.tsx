import { NextButton } from './NextButton';
import { PrevButton } from './PrevButton';
import { Dots } from './Dots';
import { ImageCard } from './ImageCard';
import { images } from './App';
import { useEffect, useState } from 'react';
type images = {
  src: string;
  alt: string;
};
type Props = {
  images: images[];
};

export function Carousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [currentIndex, images.length]);

  function handleNextClick() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }
  function handlePrevClick() {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  function handleDots(dotIndex: number) {
    setCurrentIndex(dotIndex);
  }

  return (
    <>
      <ImageCard images={images[currentIndex]} />
      <PrevButton onClick={handlePrevClick} />
      <NextButton onClick={handleNextClick} />
      <Dots current={currentIndex} images={images} onClick={handleDots} />
    </>
  );
}
