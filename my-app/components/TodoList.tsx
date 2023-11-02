import { ITask } from '@/types/types'
import React from 'react'
import Task from './Task'


interface TodoListProps{
  tasks:ITask[]
}

export const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table" style={{ width: '800px' }}>
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task Name</th>
        <th>Task</th>
        <th>Priority</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task )=>(
      <Task key ={task.id} task={task}/>))}
    </tbody>
  </table>
</div>
  );
};

export default TodoList;