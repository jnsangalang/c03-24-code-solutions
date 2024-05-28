// import { useState } from 'react'
import './ButtonContainer.css';
import './App.css';
import { ButtonContainer } from './ButtonContainer';
import { ClickCount } from './ClickCount';
import { useState } from 'react';

const buttonText = 'Hot Button';
let className = 'cold';
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    if (count === 3) {
      className = 'cool';
    }
    if (count === 6) {
      className = 'warm';
    }
    if (count === 9) {
      className = 'warmer';
    }
    if (count === 12) {
      className = 'hot';
    }
    if (count === 15) {
      className = 'hottest';
    }
  }
  return (
    <>
      <ClickCount click="Clicks" number={count} />
      <ButtonContainer
        className={className}
        onButtonClick={handleClick}
        buttonText={buttonText}
      />
    </>
  );
}

export default App;
