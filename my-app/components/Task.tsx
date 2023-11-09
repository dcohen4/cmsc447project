import { ITask } from '@/types/types'
import React from 'react'
import {LiaEditSolid} from "react-icons/lia"
import {LiaTrashAlt} from "react-icons/lia"

interface Taskprops{
    task: ITask
}

const Task: React.FC<Taskprops> = ({task}) => {
  return (
    <tr key = {task.id}>
    <th>{task.id}</th>
    <td>{task.taskname}</td>
    <td>{task.text}</td>
    <td> {task.priority ? (<input type="checkbox" className="checkbox" disabled checked />) : null}</td>
    <td className=' flex gap-5'> <LiaEditSolid cursor = 'pointer' size = {30} />
        <LiaTrashAlt cursor = 'pointer'size = {30}/>
    </td>
    {/* <td><input type="checkbox" className="checkbox" disabled checked={!!task.priority} /></td> */}

    
  </tr>
  )
}

export default Task