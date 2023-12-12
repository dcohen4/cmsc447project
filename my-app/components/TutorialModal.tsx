import React, { useRef, useEffect } from 'react';


interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
}

const TutorialModal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
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
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-box animate-flip-up animate-once animate-ease-in" ref={modalRef}>
        {/* Close the modal when the cancel button is clicked */}
        <label onClick={() => setModalOpen(false)}className='btn btn-sm btn-circle absolute right-2 top-2'>
          ✕
        </label>
       
        <h1 className='text-bold'>Welcome to the CMSC447 Task Management App!</h1>
        <p>1.To enter the site please click enter</p>
        <p>2. Once on the main page you can click the large upper button to add a task</p>
        <p>3. The large lower button will open the calendar. Click the day you wish to add a task to</p>
        <p>4. The next and previous day make it easy to switch between days quickly</p>
       
        <button onClick={() => setModalOpen(false)} className='btn flex gap-5 btn-primary '>close</button>
      </div>
    </div>
  );
}

export default TutorialModal;
