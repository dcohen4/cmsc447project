import { ITask } from '@/types/types'
import React from 'react'
import Task from './Task'


interface TodoListProps{
  tasks:ITask[]
}

export const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="relative hover:border-double overflow-x-auto max-h-[700px] shadow-xl sm:rounded-lg md:block">
    <table className="overflow-hidden w-full text-sm text-left rtl:text-right  ">
    {/* head */}
    <thead className="text-xs uppercase">
      <tr>
        <th></th>
        <th scope="col" className="px-6 py-3">Task Name</th>
        <th scope="col" className="px-6 py-3">Task</th>
        <th scope="col" className="px-6 py-3">Priority</th>
        <th scope="col" className="px-6 py-3">Edit/Delete</th>
      </tr>
    </thead>
    <tbody className=''>
      {tasks.map((task )=>(
      <Task key ={task.id} task={task}/>))}
    </tbody>
  </table>
</div>
  );
};

export default TodoList;