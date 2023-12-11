// 'use client';

// import React, { useState, Dispatch, SetStateAction } from 'react';

// // interface DateshifterProps {
// //   onDateChange: Dispatch<SetStateAction<Date>>;
// // }

// interface DateshifterProps {
//   onDateChange: (newDate: Date) => void;
//   currentDate: Date;
//   setCurrentDate: (date: Date) => void;
// }

// // const Dateshifter = ({ onDateChange }: DateshifterProps) => {
//   const Dateshifter = ({ onDateChange, currentDate, setCurrentDate }: DateshifterProps) => {

//   const [currentDay, setCurrentDay] = useState(new Date());

//   const updateDay = (newDay: Date) => {

//     setCurrentDay(newDay);
//     onDateChange(newDay); // Call the callback with the new date
    
//   };

//   const incrementDay = () => {
//     const nextDay = new Date(currentDay);
//     nextDay.setUTCDate(currentDay.getUTCDate() + 1);
//     updateDay(nextDay);
//   };
  
//   const decrementDay = () => {
//     const prevDay = new Date(currentDay);
//     prevDay.setUTCDate(currentDay.getUTCDate() - 1);
//     updateDay(prevDay);
//   };
  

//   return (
//     <div>
      
//       <div className="flex space-x-8">
//       <button className = 'btn hover-primary' onClick={decrementDay}>Previous Day</button>
//       <button className = 'btn hover' onClick={incrementDay}>Next Day</button>
//       </div>
//     </div>
//   );
// };

// export default Dateshifter;

// ... (Other imports remain the same)
'use client';

import React from 'react';

interface DateshifterProps {
  onDateChange: (newDate: Date) => void;
  currentDate: Date;
  setCurrentDate: (date: Date) => void;
}

const Dateshifter = ({ onDateChange, currentDate, setCurrentDate }: DateshifterProps) => {
  

  const incrementDay = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDay); // Update the current date using the prop method
    onDateChange(nextDay); // Call the callback with the new date
  };
  
  const decrementDay = () => {
    const prevDay = new Date(currentDate);
    prevDay.setDate(currentDate.getDate() - 1);
    setCurrentDate(prevDay); // Update the current date using the prop method
    onDateChange(prevDay); // Call the callback with the new date
  };

  return (
    <div>
      <div className="flex space-x-8">
        <button className='btn hover-primary' onClick={decrementDay}>Previous Day</button>
        <button className='btn hover' onClick={incrementDay}>Next Day</button>
      </div>
    </div>
  );
};

export default Dateshifter;
