import { ToggleSwitch } from './ToggleSwitch.tsx';
import { useState } from 'react';
import './App.css';
import './ToggleSwitch.css';
export default function App() {
  const [off, setOn] = useState(false);

  let className = 'toggle-switch';
  let label = 'ON';

  function handleClick() {
    setOn(!off);
  }

  if (off) {
    className = 'toggle-switch';
    label = 'OFF';
  } else if (!off) {
    className = 'toggle-switch is-on';
    label = 'ON';
  }

  return (
    <>
      <ToggleSwitch
        label={label}
        onSwitchHit={handleClick}
        className={className}
      />
    </>
  );
}
