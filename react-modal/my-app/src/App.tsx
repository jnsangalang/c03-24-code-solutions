import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

export default function App() {
  // const modal = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        Delete Me!
      </button>
      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}>
        <p>Are you sure you want to delete?</p>
        <button
          onClick={() => {
            setIsOpen(false);
          }}>
          Cancel
        </button>
        <button
          onClick={() => {
            alert('Button delete confirmed!');
            setIsOpen(false);
          }}>
          Delete
        </button>
      </Modal>
    </div>
  );
}
