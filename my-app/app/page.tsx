'use client';


import React, { useEffect, useState } from 'react';
import { getAllTodos } from "@/api";
import { TodoList } from "@/components/TodoList";
import AddTask from "@/components/AddTask";
import ViewTask from "@/components/ViewTask";
import Dateshifter from "@/components/Dateshifter";
import { ITask } from '@/types/types'


export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const [tasks, setTasks] = useState([]);
  const [tasks, setTasks] = useState<ITask[]>([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const allTasks = await getAllTodos();
      
//       const formatDateOnly = (date: Date) => date.toISOString().split('T')[0];
//       const filteredTasks = allTasks.filter(task => 
//       formatDateOnly(new Date(task.date)) === formatDateOnly(selectedDate)
      
// );
//     console.log(); 
//       setTasks(filteredTasks);
//     };

//     fetchTasks();
//   }, [selectedDate]);

useEffect(() => {
  const fetchTasks = async () => {
    const allTasks = await getAllTodos();
    
    const formatDateOnly = (date: Date) => date.toISOString().split('T')[0];
    const filteredTasks = allTasks.filter(task => 
    formatDateOnly(new Date(task.date + 'T00:00:00Z')) === formatDateOnly(selectedDate)
    );
  
    setTasks(filteredTasks);
  };

  fetchTasks();
}, [selectedDate]);

  return (
    <main className="max-w-4xl mx-auto mt-15">
      <div className="text-left my-10 ">
      
        <Dateshifter onDateChange={(date) => setSelectedDate(date)} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '25vh' }}>
        <h3 className="font-bold text-lg"></h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '150%', margin: '150px' }}>
          
          <div className='mb-8' style={{ flex: 2, marginRight: '200px' }}>
          <h1 className="font-bold text-lg">{selectedDate.toDateString()}</h1>
            <TodoList tasks={tasks} /> {/* Display only tasks for the selected date */}
          </div>

          <div className='grid justify-evenly grid-cols-2 gap-16'>
            <AddTask></AddTask>
            <ViewTask></ViewTask>
            {/* <EditTask></EditTask>
                <DeleteTask></DeleteTask> */}
          </div>
        </div>
      </div>
    </main>
  )
}
