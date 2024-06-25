import React, { ReactNode, useEffect, useRef } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  function handleKeyDown(e: React.KeyboardEvent<HTMLDialogElement>) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    isOpen ? modal.current?.showModal() : modal.current?.close();
  });

  return (
    <div>
      <dialog ref={modal} onKeyDown={handleKeyDown}>
        {children}
      </dialog>
    </div>
  );
}
