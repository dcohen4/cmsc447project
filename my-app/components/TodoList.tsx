import { ITask } from '@/types/types'
import React from 'react'
import Task from './Task'


interface TodoListProps{
  tasks:ITask[]
}

export const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="relative overflow-x-auto max-h-[300px] shadow-md sm:rounded-lg md:block">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
    <tbody className=''>
    {tasks.length === 0 ? (
      <tr className=' px-6 py-4 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
      
      <td  className="px-6 py-0"> Please</td>
      <td  className="px-6 py-0"> Enter </td>
      <td  className="px-6 py-0"> a </td>
      <td  className="px-6 py-0"> new </td>
      <td  className="px-6 py-4"> Task </td>
      </tr>

      
  ) : (
    tasks.map((task) => <Task key={task.id} task={task} />)
   )} </tbody>
  </table>
</div>
  );
};

export default TodoList;