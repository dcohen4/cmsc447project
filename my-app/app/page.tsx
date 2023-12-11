'use client';

import React, { useEffect, useState } from 'react';
import { getAllTodos } from "@/api";
import { TodoList } from "@/components/TodoList";
import AddTask from "@/components/AddTask";
import Dateshifter from "@/components/Dateshifter";
import { ITask } from '@/types/types';

import './globals.css';
import Dropdown from '@/components/Dropdown';
import { ThemeProvider } from '@/context/ThemeContext';
import ClientThemeWrapper from '@/context/ClientThemeWrapper';
import EditTask from '@/components/ViewTask';
import CalendarModal from '@/components/CalendarModal';
import Calendar from '@/components/Calendar';
import SnowComponent from '@/components/SnowComponent';

export default function Home() {
<<<<<<< Updated upstream
  const [modalOpen, setModalOpen] = useState(false);
const [selectedDate, setSelectedDate] = useState(new Date(localStorage.getItem('selectedDate') || Date.now()));
// const [selectedDate, setSelectedDate] = useState(new Date(localStorage.getItem('selectedDate') || Date.now()));

  console.log("setSelectedDate in Home:", setSelectedDate);
  
=======
<<<<<<< HEAD
  const [selectedDate, setSelectedDate] = useState(new Date());
=======
  const [modalOpen, setModalOpen] = useState(false);
const [selectedDate, setSelectedDate] = useState(new Date(localStorage.getItem('selectedDate') || Date.now()));
// const [selectedDate, setSelectedDate] = useState(new Date(localStorage.getItem('selectedDate') || Date.now()));
>>>>>>> Stashed changes

  console.log("setSelectedDate in Home:", setSelectedDate);
  

>>>>>>> 8b265c6636f8abe9cd9fe3d142a3fa73578f2ab3
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [calendarDate, setCalendarDate] = useState<Date | null>(null);

  useEffect(() => {
    console.log("In Home, selectedDate:", selectedDate);
    const fetchTasks = async () => {
      const allTasks = await getAllTodos();

      const formatDateOnly = (date: Date) => date.toISOString().split('T')[0];
      const filteredTasks = allTasks.filter(task =>
        formatDateOnly(new Date(task.date + 'T00:00:00Z')) === formatDateOnly(selectedDate)
      );
      console.log("Selected Date in Home:", selectedDate);

      localStorage.setItem('selectedDate', selectedDate.toString());

      setTasks(filteredTasks);
    };
    fetchTasks();
  }, [selectedDate]);

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
  const handleSelectedDate = (date: Date) => {
    setCalendarDate(date); 
    setSelectedDate(date); 
  };


=======
>>>>>>> 8b265c6636f8abe9cd9fe3d142a3fa73578f2ab3
>>>>>>> Stashed changes
  return (
    <main>
      <ThemeProvider>
        <ClientThemeWrapper>
          <div className="h-screen">
            <div><Dropdown /></div>
            <div className='flex pt-8 my-8'>
              <div className="container border-solid border-2 h-auto w-full pt-8 pl-8 ms-8 ">
                <h1 className="text-primary font-bold text-2xl">{selectedDate.toDateString()}</h1>
                {tasks.length === 0 ? (
                  <div className="items-center justify-center h-full w-full flex items-center justify-center text-primary text-5xl">
                    Nothing to Do? 😴
                  </div>
                ) : (
                  <TodoList tasks={tasks} />
                )}
              </div>
              <div className='justify-items-center content-center place-content-evenly space-y-6 mx-8'>
<<<<<<< Updated upstream
                  <Dateshifter  onDateChange={(date) => setSelectedDate(date)} />
                  <AddTask></AddTask>
                  <EditTask></EditTask>
=======
<<<<<<< HEAD
                <Dateshifter onDateChange={(date) => setSelectedDate(date)} />
                <AddTask />
                <EditTask onDateSelect={handleSelectedDate} />
               
                {calendarDate && <p>Selected Date: {calendarDate.toDateString()}</p>}
=======
                  <Dateshifter  onDateChange={(date) => setSelectedDate(date)} />
                  <AddTask></AddTask>
                  <EditTask></EditTask>
>>>>>>> 8b265c6636f8abe9cd9fe3d142a3fa73578f2ab3
>>>>>>> Stashed changes
              </div>
            </div>
          </div>
        </ClientThemeWrapper>
      </ThemeProvider>
      <SnowComponent />
    </main>
  )
}
