import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Dateshifter from './Dateshifter';
import Page from '../app/page';

interface CalendarProps {
  onDateClick: (date: Date) => void;
  setCurrentDate: (date: Date) => void; 
}


const Calendar: React.FC<CalendarProps> = ({ onDateClick, setCurrentDate }) => {
  const handleDateClick = (arg: { dateStr: any; }) => {
    console.log('Date clicked:', arg.dateStr);
  
    const newDate = new Date(arg.dateStr);
    setCurrentDate(newDate); 
    onDateClick(newDate)

    console.log("setCurrentDate in Calendar:", setCurrentDate);

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
