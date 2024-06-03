// import {items} from './App'
type Props = {
  items: string[];
  current: number;
  onClick: (buttonNumber: number) => void;
};

export function NumberedButtons({ items, current, onClick }: Props) {
  const numberedButtons = items.map((item, index) => (
    <button
      onClick={() => onClick(index)}
      key={index}
      style={{ backgroundColor: index === current ? 'blue' : 'grey' }}>
      {index + 1}
    </button>
  ));

  return <div>{numberedButtons}</div>;
}
