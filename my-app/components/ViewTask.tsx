"use client"

import React, { useState } from 'react';
import { BiSolidCalendar } from 'react-icons/bi';
import CalendarModal from './CalendarModal';
import Calendar from './Calendar';

interface EditTaskProps {
  onDateSelect: (date: Date) => void; // Prop definition for onDateSelect
}

const EditTask: React.FC<EditTaskProps> = ({ onDateSelect }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className='btn hover-accent w-48 h-48 px-12 py-12 border-radius-100 mb-4 shadow-lg rounded-3xl border-accent border-2'
      >
        <BiSolidCalendar className='' size={75} />
      </button>
      <CalendarModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        onDateSelect={onDateSelect} // Pass the function to handle selected date
      >
        <Calendar onDateClick={onDateSelect} /> {/* Pass onDateClick prop */}
      </CalendarModal>
    </div>
  );
};

export default EditTask;
