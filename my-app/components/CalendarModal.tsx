import React, { useRef, useEffect } from 'react';
import Calendar from './Calendar';
import Dateshifter from './Dateshifter';
import Page from '../app/page';
interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
<<<<<<< Updated upstream
  setCurrentDate: (date: Date) => void; 
}


const CalendarModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, setCurrentDate }) => {
  console.log("In CalendarModal, setCurrentDate:", setCurrentDate);
=======
<<<<<<< HEAD
  onDateSelect: (date: Date) => void; // Define prop for date selection
}

const CalendarModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, onDateSelect }) => {
=======
  setCurrentDate: (date: Date) => void; 
}


const CalendarModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, setCurrentDate }) => {
  console.log("In CalendarModal, setCurrentDate:", setCurrentDate);
>>>>>>> 8b265c6636f8abe9cd9fe3d142a3fa73578f2ab3
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    console.log('onDateClick in CalendarModal with date:', date);
    setModalOpen(false); // Close the modal when a date is clicked
    setCurrentDate(date); // Update the current date
    console.log("setCurrentDate in CalendarModal:", setCurrentDate);

=======
<<<<<<< HEAD
    setModalOpen(false); // Close the modal when a date is clicked
    onDateSelect(date); // Pass the clicked date to the callback function in the Home component
=======
    console.log('onDateClick in CalendarModal with date:', date);
    setModalOpen(false); // Close the modal when a date is clicked
    setCurrentDate(date); // Update the current date
    console.log("setCurrentDate in CalendarModal:", setCurrentDate);

>>>>>>> 8b265c6636f8abe9cd9fe3d142a3fa73578f2ab3
>>>>>>> Stashed changes
  };


  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className=" modal-box scale-100" ref={modalRef}>
        <div className="pb-6">
          {/* Pass the function to handle date click to the Calendar component */}
<<<<<<< Updated upstream
          <Calendar onDateClick={onDateClick} setCurrentDate={setCurrentDate} />
          </div>
=======
<<<<<<< HEAD
          <Calendar onDateClick={onDateClick} />
        </div>
=======
          <Calendar onDateClick={onDateClick} setCurrentDate={setCurrentDate} />
          </div>
>>>>>>> 8b265c6636f8abe9cd9fe3d142a3fa73578f2ab3
>>>>>>> Stashed changes
        <button onClick={() => setModalOpen(false)} className='btn flex gap-5 btn-primary'>Close</button>
      </div>
    </div>
  );
};

export default CalendarModal;
