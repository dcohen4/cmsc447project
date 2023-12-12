'use client'

import Modal from "./Modal"
import React, { useState } from 'react'
import TutorialModal from "./TutorialModal";


const Tutorial = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn m-2 mr-8"'>
        Tutorial
    </button>
    <TutorialModal modalOpen={modalOpen} setModalOpen={setModalOpen} >
      
    </TutorialModal>
    
    </div>
  )
}

export default Tutorial