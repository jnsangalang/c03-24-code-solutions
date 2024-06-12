import { GoDot } from 'react-icons/go';
import { GoDotFill } from 'react-icons/go';
type Images = {
  src: string;
  alt: string;
};
type Props = {
  current: number;
  images: Images[];
  onClick: (dotIndex: number) => void;
};
export function Dots({ current, images, onClick }: Props) {
  const dots = images.map((_, index) => (
    <button
      onClick={() => onClick(index)}
      style={{ background: 'none' }}
      key={index}>
      {current === index ? <GoDot /> : <GoDotFill />}
    </button>
  ));
  return <div>{dots}</div>;
}
