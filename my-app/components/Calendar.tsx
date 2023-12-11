import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

interface CalendarProps {
  onDateClick: (date: Date) => void; // Accepts a Date argument
}

const Calendar: React.FC<CalendarProps> = ({ onDateClick }) => {
  const handleDateClick = (arg: { date: Date }) => { // Adjust the argument to match Date type
    console.log('Date clicked:', arg.date);
    onDateClick(arg.date); // Notify the parent component about the date click with the Date argument
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
