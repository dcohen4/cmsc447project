import { ITask } from '@/types/types'
import React from 'react'
import Task from './Task'


interface TodoListProps{
  tasks:ITask[]
}

export const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="relative overflow-x-auto max-w-[690px] shadow-md sm:rounded-lg md:block">
    <table className="overflow-hidden w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    {/* head */}
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th></th>
        <th scope="col" className="px-6 py-3">Task Name</th>
        <th scope="col" className="px-6 py-3">Task</th>
        <th scope="col" className="px-6 py-3">Priority</th>
        <th scope="col" className="px-6 py-3">Edit/Delete</th>
      </tr>
    </thead>
    <tbody className='bg-gray-700 border-gray-900 '>
      {tasks.map((task )=>(
      <Task key ={task.id} task={task}/>))}
    </tbody>
  </table>
</div>
  );
};

export default TodoList;