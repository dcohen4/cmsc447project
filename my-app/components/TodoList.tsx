import { ITask } from '@/types/types'
import React from 'react'
import Task from './Task'


interface TodoListProps{
  tasks:ITask[]
}

export const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto ">
  <table className="table table-auto overflow-scroll rounded-lg overflow-hidden border-2 border-dashed border-slate-900 shadow-2xl" style={{ width: '800px' }}>
    {/* head */}
    <thead className='bg-slate-600 text-slate-950'>
      <tr>
        <th></th>
        <th>Task Name</th>
        <th>Task</th>
        <th>Priority</th>
        <th>Edit/Delete</th>
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