'use client'

import Modal from "./Modal"
import React, { useState } from 'react'
import { BiSolidCalendarX } from 'react-icons/bi'

const DeleteTask = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn hover:bg-slate-800 w-48 h-48 px-12 py-12 border-radius-100 mb-4 shadow-lg rounded-3xl border-black border-2'>
      <BiSolidCalendarX className='' size={75} />
    </button>
    
    </div>
  )
}

export default DeleteTask