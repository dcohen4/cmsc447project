import React, { useRef, useEffect } from 'react';
import Accept from './Accept';

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen }) => {
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
      <div className="modal-box" ref={modalRef}>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <label
            onClick={() => setModalOpen(false)}
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
        </form>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ marginRight: '20px' }}>
        <h3 className="font-bold text-lg">Please Enter Your Tasks</h3>
        <input type="text" placeholder="Enter Task Name" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Enter Task" className="input input-bordered input-lg w-full max-w-xs" />
      </div>
      <div>
      <div className="form-control">
  <label className="label cursor-pointer">
    
    <input type="checkbox" className="toggle" checked />
  </label>
</div>
      </div>
    </div>
       
<Accept/>
      </div>
    </div>
  );
}

export default Modal;
