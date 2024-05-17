import { PreviousButton } from './PreviousButton';
import { RotatingBanner } from './RotatingBanner';
import { NumberButtons } from './NumberedButtons';
import { NextButton } from './NextButton';
import './App.css';
export type Animals = string[];
const items: Animals = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];
console.log(items);
console.log({ items });
export default function App() {
  return (
    <>
      <RotatingBanner items={items} />
      <PreviousButton />
      <NumberButtons />
      <NextButton />
    </>
  );
}
