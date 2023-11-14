import React, { useRef, useEffect } from 'react';


interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const CalendarModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Add an event listener to handle clicks outside the modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };

    if (modalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalOpen, setModalOpen]);

  return (
    <div className= {`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box animate-flip-up animate-once animate-ease-in " ref={modalRef}>
        {/* Close the modal when the cancel button is clicked */}
        
        <div className="pb-6">  <label onClick={() => setModalOpen(false)}className='btn btn-sm btn-circle absolute right-2 top-2'>
          ✕
        </label></div>
      
        <div className="pb-6">{children}</div>
        
        {/* Close the modal when the cancel button is clicked */}
        <button onClick={() => setModalOpen(false)} className='btn flex gap-5 btn-primary '>Close</button>
      </div>
    </div>
  );
}

export default CalendarModal;
