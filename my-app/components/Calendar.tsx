'use client'
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  return (
    <div >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        height={"60vh"}
       
        
      />
    </div>
  );
}

export default Calendar;
