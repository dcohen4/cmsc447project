'use client';

import React, { useEffect, useState } from 'react';
import { getAllTodos } from "@/api";
import { TodoList } from "@/components/TodoList";
import AddTask from "@/components/AddTask";
import Dateshifter from "@/components/Dateshifter";
import { ITask } from '@/types/types';
import '@/app/globals.css';
import Dropdown from '@/components/Dropdown';
import { ThemeProvider } from '@/context/ThemeContext';
import ClientThemeWrapper from '@/context/ClientThemeWrapper';
import EditTask from '@/components/ViewTask';
import SnowComponent from '@/components/SnowComponent';

export default function Page() {

  

  const [selectedDate, setSelectedDate] = useState(new Date(localStorage.getItem('selectedDate') || Date.now()));
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [calendarDate, setCalendarDate] = useState<Date | null>(null);

  useEffect(() => {
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

  const handleSelectedDate = (date: Date) => {
    setCalendarDate(date); 
    setSelectedDate(date); 
  };


  return (
    <main>
      <ThemeProvider>
        <ClientThemeWrapper>
          <div className="h-screen">
            <Dropdown />
            <div className='flex pt-8 my-8'>
              <div className="container border-solid border-2 h-auto w-full pt-8 pl-8 ms-8 border-secondary">
                <h1 className="text-primary font-bold text-2xl">{selectedDate.toDateString()}</h1>
                {tasks.length === 0 ? (
                  <div className="items-center h-full w-full flex justify-center text-primary text-5xl">
                    Nothing to Do? 😴
                  </div>
                ) : (
                  <TodoList tasks={tasks} />
                )}
              </div>
              <div className='justify-items-center content-center place-content-evenly space-y-6 mx-8'>
                <Dateshifter onDateChange={(date) => setSelectedDate(date)} />
                <AddTask />
                <EditTask onDateSelect={handleSelectedDate} />
               
                
              </div>
            </div>
          </div>
        </ClientThemeWrapper>
      </ThemeProvider>
      {/* <SnowComponent /> */}
    </main>
  )
}
