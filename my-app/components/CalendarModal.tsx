import React, { useRef, useEffect } from 'react';
import Calendar from './Calendar';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const CalendarModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

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

  const handleDateClick = () => {
    setModalOpen(false); // Close the modal when a date is clicked
  };

  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className=" modal-box scale-100" ref={modalRef}>
        <div className="pb-6">
          {/* Pass the function to handle date click to the Calendar component */}
          <Calendar  onDateClick={handleDateClick} />
        </div>
        <button onClick={() => setModalOpen(false)} className='btn flex gap-5 btn-primary'>Close</button>
      </div>
    </div>
  );
};

export default CalendarModal;
