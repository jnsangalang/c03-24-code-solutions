// import { useState } from 'react'
import './ButtonContainer.css';
import './App.css';
import { ButtonContainer } from './ButtonContainer';
import { ClickCount } from './ClickCount';
import { useState } from 'react';

const buttonText = 'Hot Button';
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    if (count === 3) {
      document.querySelector('#button')?.classList.replace('cold', 'cool');
    }
    if (count === 6) {
      document.querySelector('#button')?.classList.replace('cool', 'warm');
    }
    if (count === 9) {
      document.querySelector('#button')?.classList.replace('warm', 'warmer');
    }
    if (count === 12) {
      document.querySelector('#button')?.classList.replace('warmer', 'hot');
    }
    if (count === 15) {
      document.querySelector('#button')?.classList.replace('hot', 'hottest');
    }
  }
  return (
    <>
      <ClickCount click="Clicks" number={count} />
      <ButtonContainer onButtonClick={handleClick} buttonText={buttonText} />
    </>
  );
}

export default App;
