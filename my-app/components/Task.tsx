'use client';
import { ITask } from '@/types/types'
import React, { FormEventHandler, useState } from 'react'
import {LiaEditSolid} from "react-icons/lia"
import {LiaTrashAlt} from "react-icons/lia"
import Modal from './Modal'
import { addTodo, editTodo, removeTodo } from '@/api';
import { useRouter } from 'next/navigation';
import ModalRemove from './ModalRemove';


interface Taskprops{
    task: ITask
}


const Task: React.FC<Taskprops> = ({task}) => {
  const router = useRouter();
 const[openModalEdit, setModalOpenEdit] = useState<boolean>(false)
 const[openModalRemove, setModalOpenRemove] = useState<boolean>(false);

 const [taskToEdit, setTaskToEdit] = useState <string>(task.text);
 const [taskNameToEdit, setTaskNameToEdit] = useState<string>(task.taskname);
 const [dateToEdit, setdateToEdit] = useState<string>(task.date);
 const [priorityToEdit, setpriorityToEdit] = useState<boolean>(task.priority);



 const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {

    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
      taskname: taskNameToEdit,
      date: dateToEdit,
      priority: priorityToEdit
    });
    
    setModalOpenEdit(false);
    
      
    
    
    setpriorityToEdit(false);
    setModalOpenEdit(false);
    router.refresh();
  
}

const handleDeleteTask = async (id: string) => {
  await removeTodo(id);
  setModalOpenRemove(false);
  router.refresh();
};
 
  return (
    <tr key = {task.id}>
    <th>{task.id}</th>
    <td>{task.taskname}</td>
    <td>{task.text}</td>
    <td> {task.priority ? (<input type="checkbox" className="checkbox" disabled checked />) : null}</td>
    <td className=' flex gap-5'> 
    <LiaEditSolid onClick = {()=>setModalOpenEdit(true)}cursor = 'pointer' size = {30} />
    <Modal modalOpen={openModalEdit} setModalOpen={setModalOpenEdit} >
        <form onSubmit={handleSubmitEditTodo}>
          <div className='modal-action' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', alignContent: 'space-evenly' }}>
            <div style={{ marginRight: '0px' }}>
              <h3 className="font-bold text-lg mb-1">Please Edit Your Tasks</h3>
              <input
                value={taskNameToEdit}
                onChange={(e) => setTaskNameToEdit(e.target.value)}
                type="text"
                placeholder="Enter Task Name"
                className={`input input-bordered w-full max-w-xs mb-2`}
              />
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Notes"
                className={`input input-bordered input-lg w-full max-w-xs mb-2 `}
              />
              <input
                value={dateToEdit}
                onChange={(e) => setdateToEdit(e.target.value)}
                type="date"
                placeholder="Date" className={`input input-bordered input-lg w-full max-w-xs mb-6`}
              />
            </div>
            <div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text pr-4">Priority?</span>
                  <input type="checkbox" onChange={(e) => setpriorityToEdit(e.target.checked)} className="toggle" />
                </label>
              </div>
            </div>
          </div>
          <div className=" content-evenly pt-6">
            <button className={`btn btn-primary w-full`}>Submit</button>
          </div>
        </form>
      </Modal>
        <LiaTrashAlt onClick = {()=>setModalOpenRemove(true)} cursor = 'pointer'size = {30}/>
        <ModalRemove modalOpen={openModalRemove} setModalOpen={setModalOpenRemove} >
          <h3 className = "text-lg"> Are you Sure You Want to Remove This Task?</h3>
          <div className=' modal-action'>
            <button onClick={() => handleDeleteTask(task.id)} className={`btn`}>Yes</button>
          </div>
        
      </ModalRemove>

    </td>
    {/* <td><input type="checkbox" className="checkbox" disabled checked={!!task.priority} /></td> */}

    
  </tr>
  )
}

export default Task

