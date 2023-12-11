import React, { useRef, useEffect } from 'react';
import Calendar from './Calendar';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  onDateSelect: (date: Date) => void; // Define prop for date selection
  children?: React.ReactNode;

}

const CalendarModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, onDateSelect }) => {
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

  const onDateClick = (date: Date) => {
    setModalOpen(false); // Close the modal when a date is clicked
    onDateSelect(date); // Pass the clicked date to the callback function in the Home component
  };

  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className=" modal-box scale-100" ref={modalRef}>
        <div className="pb-6">
          {/* Pass the function to handle date click to the Calendar component */}
          <Calendar onDateClick={onDateClick} />
        </div>
        <button onClick={() => setModalOpen(false)} className='btn flex gap-5 btn-primary'>Close</button>
      </div>
    </div>
  );
};

export default CalendarModal;
