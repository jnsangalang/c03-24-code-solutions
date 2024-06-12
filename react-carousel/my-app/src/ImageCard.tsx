type Props = {
  images: {
    alt: string;
    src: string;
  };
};

export function ImageCard({ images }: Props) {
  return <img src={images.src} alt={images.alt} />;
}
