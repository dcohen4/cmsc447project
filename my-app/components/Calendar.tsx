import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Dateshifter from './Dateshifter';
import Page from '../app/page';

interface CalendarProps {
<<<<<<< Updated upstream
  onDateClick: (date: Date) => void;
  setCurrentDate: (date: Date) => void; 
}

=======
<<<<<<< HEAD
  onDateClick: (date: Date) => void; // Accepts a Date argument
}

const Calendar: React.FC<CalendarProps> = ({ onDateClick }) => {
  const handleDateClick = (arg: { date: Date }) => { // Adjust the argument to match Date type
    console.log('Date clicked:', arg.date);
    onDateClick(arg.date); // Notify the parent component about the date click with the Date argument
=======
  onDateClick: (date: Date) => void;
  setCurrentDate: (date: Date) => void; 
}

>>>>>>> Stashed changes

const Calendar: React.FC<CalendarProps> = ({ onDateClick, setCurrentDate }) => {
  const handleDateClick = (arg: { dateStr: any; }) => {
    console.log('Date clicked:', arg.dateStr);
  
    const newDate = new Date(arg.dateStr);
    setCurrentDate(newDate); 
    onDateClick(newDate)

    console.log("setCurrentDate in Calendar:", setCurrentDate);

<<<<<<< Updated upstream
=======
>>>>>>> 8b265c6636f8abe9cd9fe3d142a3fa73578f2ab3
>>>>>>> Stashed changes
  };
  

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      contentHeight={450}
      selectable={true}
      dateClick={handleDateClick}
    />
  );
};

export default Calendar;
