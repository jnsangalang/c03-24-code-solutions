import { RotatingBanner } from './RotatingBanner';
import './App.css';
export type Animals = string;
export const items: Animals[] = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];
export default function App() {
  console.log({ items });
  return <RotatingBanner items={items} />;
}
