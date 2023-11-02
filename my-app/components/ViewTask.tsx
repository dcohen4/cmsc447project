'use client'

import Modal from "./Modal"
import React, { useState } from 'react'
import { BiSolidCalendar } from 'react-icons/bi'

const ViewTask = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='relative fixed top-0 left-0 btn hover:bg-blue-900 w-48 h-48 px-12 py-12 border-radius-100 mb-4'>
      <BiSolidCalendar className='' size={75} />
    </button>
    <Modal modalOpen = {modalOpen} setModalOpen = {setModalOpen} />
    </div>
  )
}

export default ViewTask