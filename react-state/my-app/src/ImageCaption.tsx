import { useState } from 'react';
type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= imageCap.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const caption = imageCap[index];

  return (
    <div>
      <h3 onClick={handleClick}>{caption}</h3>
    </div>
  );
}
