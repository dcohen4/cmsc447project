import { ITask } from '@/types/types'
import React from 'react'


interface TodoListProps{
  tasks:ITask[]
}

export const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task</th>
        <th></th>
        <th>Priority</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task =>(
      <tr key = {task.id}>
        <th>{task.id}</th>
        <td>{task.taskname}</td>
        <td>{task.text}</td>
        <td> {task.priority ? (<input type="checkbox" className="checkbox" disabled />) : null}</td>
      
       
        
        
        {/* <td><input type="checkbox" className="checkbox" disabled checked={!!task.priority} /></td> */}

        
      </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}
