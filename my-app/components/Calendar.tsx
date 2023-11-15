import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

interface CalendarProps {
  onDateClick: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateClick }) => {
  const handleDateClick = (arg: { dateStr: any; }) => {
    console.log('Date clicked:', arg.dateStr);
    onDateClick(); // Notify the parent component about the date click
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
