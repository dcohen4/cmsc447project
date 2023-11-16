import { getAllTodos } from "@/api";
import { TodoList } from "@/components/TodoList";
import React, {useEffect, useState} from "react";
import AddTask from "@/components/AddTask";

import ViewTask from "@/components/ViewTask";
import Dateshifter from "@/components/Dateshifter";



export default async function Home() {
  const tasks = await getAllTodos();
  
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();


  return (
    <main className="max-w-4xl mx-auto mt-15">


      <div className="text-left my-10 ">
        <h1 className="font-bold text-lg">Task Management App: {formattedDate}</h1>
        <Dateshifter />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '25vh' }}>
        <h3 className="font-bold text-lg"></h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '150%', margin: '150px' }}>
          <div className='mb-8' style={{ flex: 2, marginRight: '200px' }}>
            <TodoList tasks={tasks} />
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
