import './App.css';
import { Carousel } from './Carousel';
export const images = [
  {
    src: '/public/images/fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: '/public/images/inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: '/public/images/itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: '/public/images/kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: '/public/images/panda.webp',
    alt: 'Panda',
  },
  {
    src: '/public/images/zen-in.webp',
    alt: "Maki Zen'in",
  },
];
export default function App() {
  return <Carousel images={images} />;
}
