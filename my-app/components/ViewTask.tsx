'use client'

import CalendarModal from "./CalendarModal"
import React, { useState } from 'react'
import { BiSolidCalendar, BiSolidCalendarEdit } from 'react-icons/bi'
import Calendar from "./Calendar"

const EditTask = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn hover:accent w-48 h-48 px-12 py-12 border-radius-100 mb-4 shadow-lg rounded-3xl border-black border-2'>
      <BiSolidCalendar className='' size={75} />
    </button>
    <CalendarModal modalOpen={modalOpen} setModalOpen={setModalOpen} >
      <Calendar/>
    </CalendarModal>
    
    </div>
  )
}

export default EditTask





