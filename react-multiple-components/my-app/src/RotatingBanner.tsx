import { Animals } from './App';
type Props = {
  items: Animals;
};
export function RotatingBanner({ items }: Props) {
  console.log('banner.tsx', { items });
  return <div>{items[0]}</div>;
}
