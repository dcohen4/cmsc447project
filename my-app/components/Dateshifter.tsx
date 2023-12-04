'use client';

import React, { useState, Dispatch, SetStateAction } from 'react';

interface DateshifterProps {
  onDateChange: Dispatch<SetStateAction<Date>>;
}

const Dateshifter = ({ onDateChange }: DateshifterProps) => {
  const [currentDay, setCurrentDay] = useState(new Date());

  const updateDay = (newDay: Date) => {

    setCurrentDay(newDay);
    onDateChange(newDay); // Call the callback with the new date
    
  };

  const incrementDay = () => {
    const nextDay = new Date(currentDay);
    nextDay.setUTCDate(currentDay.getUTCDate() + 1);
    updateDay(nextDay);
  };
  
  const decrementDay = () => {
    const prevDay = new Date(currentDay);
    prevDay.setUTCDate(currentDay.getUTCDate() - 1);
    updateDay(prevDay);
  };
  

  return (
    <div>
      
      <div className="flex space-x-8">
      <button className = 'btn hover:bg-slate-800' onClick={decrementDay}>Previous Day</button>
      <button className = 'btn hover:bg-slate-800' onClick={incrementDay}>Next Day</button>
      </div>
    </div>
  );
};

export default Dateshifter;
