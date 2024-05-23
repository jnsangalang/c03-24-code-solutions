import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './Popup';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const postionRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <button
        ref={postionRef}
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        Pop Up!
      </button>
      <Popup
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        position={postionRef.current}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Popup>
    </>
  );
}
