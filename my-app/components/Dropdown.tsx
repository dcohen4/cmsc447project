'use client'

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext, useState } from 'react'
    



const Dropdown = () => {

    const {changeTheme} = useContext(ThemeContext);

  return (
    <div className="dropdown ">
  <div tabIndex={0} role="button" className="btn m-2 mx-8">Themes</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-slate-900 w-52 rounded">
    <li><a className = 'text-primary' onClick={() => changeTheme("light")}>Light</a></li>
    <li><a className = 'text-primary' onClick={() => changeTheme("dark")}>Dark</a></li>
    <li><a className = 'text-primary'  onClick={() => changeTheme("aqua")}>Aqua</a></li>
    <li><a className = 'text-primary'  onClick={() => changeTheme("luxury")}>Luxury</a></li>
    <li><a className = 'text-primary'  onClick={() => changeTheme("night")}>Night</a></li>
    <li><a className = 'text-primary' onClick={() => changeTheme("synthwave")}>Synth</a></li>
    <li><a  className = 'text-primary' onClick={() => changeTheme("mytheme")}>cmsc447</a></li>
  </ul>
</div>
  )
}

export default Dropdown





