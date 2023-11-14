'use client'
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


function Calendar() {
  return (
    // @ts-ignore
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }}
      initialView={"dayGridMonth"}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      //events={}
      />
  );
}

export default Calendar;
