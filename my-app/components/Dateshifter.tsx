'use client';

import React, { useState } from 'react';

const Dateshifter = () => {
  const [currentDay, setCurrentDay] = useState(new Date());

  const incrementDay = () => {
    const nextDay = new Date(currentDay);
    nextDay.setDate(currentDay.getDate() + 1);
    setCurrentDay(nextDay);
  };

  const decrementDay = () => {
    const prevDay = new Date(currentDay);
    prevDay.setDate(currentDay.getDate() - 1);
    setCurrentDay(prevDay);
  };

  return (
    <div>
      <h1>Current Day: {currentDay.toDateString()}</h1>
      <button onClick={decrementDay}>Previous Day</button>
      <button onClick={incrementDay}>Next Day</button>
      
    </div>
  );
};

export default Dateshifter;
