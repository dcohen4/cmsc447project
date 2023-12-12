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
 const [completeToEdit, setcompleteToEdit] = useState<boolean>(task.complete);

 const MAX_CHARACTERS_TASK = 100;
 const MAX_CHARACTERS_TASKNAME = 23;

 const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {

    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
      taskname: taskNameToEdit,
      date: dateToEdit,
      complete: completeToEdit,
      priority: priorityToEdit
    });
    
    setModalOpenEdit(false);
    
      
    
    
    
    setModalOpenEdit(false);
    router.refresh();
    window.location.reload();
  
}

const handleDeleteTask = async (id: string) => {
  await removeTodo(id);
  setModalOpenRemove(false);
  router.refresh();
  window.location.reload();
};

const remainingCharacters_TASK = MAX_CHARACTERS_TASK - taskToEdit.length;
const remainingCharacters_TASKNAME = MAX_CHARACTERS_TASKNAME - taskNameToEdit.length;

  return (
    <tr key = {task.id} className={task.complete ? 'bg-success text-neutral' : task.priority ? ' text-secondary text-bold' : ''}>
    <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap "></th>
    <td className="px-6 py-4">{task.taskname}</td>
    <td className="px-6 py-4 ">{task.text}</td>
    <td className="px-9 py-4"> {task.priority ? (<input type="checkbox" className="checkbox" disabled checked />) : null}</td>
    <td className='px-6 py-3 flex gap-6'> 
    <LiaEditSolid onClick = {()=>setModalOpenEdit(true)}cursor = 'pointer' size = {30} />
    
    <Modal modalOpen={openModalEdit} setModalOpen={setModalOpenEdit} >
        <form onSubmit={handleSubmitEditTodo}>
          <div className='modal-action' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', alignContent: 'space-evenly' }}>
            <div style={{ marginRight: '0px' }}>
              <h3 className="font-bold text-lg mb-1">Please Edit Your Tasks</h3>
              <input
                value={taskNameToEdit}
                onChange={(e) => {
                  const text = e.target.value;
                  if (text.length <= MAX_CHARACTERS_TASKNAME) {
                    setTaskNameToEdit(text);
                  } else {
                    setTaskNameToEdit(text.slice(0, MAX_CHARACTERS_TASKNAME));
                  }
                }}
                type="text"
                placeholder="Enter Task Name"
                className={`input input-bordered w-full max-w-xs mb-2`}
              />
               <div className="pb-4" style={{ fontSize: '0.75rem', color: remainingCharacters_TASKNAME < 0 ? 'red' : 'inherit' }}>
                {remainingCharacters_TASKNAME}/{MAX_CHARACTERS_TASKNAME} characters remaining
              </div>
              <input
                value={taskToEdit}
                onChange={(e) => {
                  const text = e.target.value;
                  if (text.length <= MAX_CHARACTERS_TASK) {
                    setTaskToEdit(text);
                  } else {
                    setTaskToEdit(text.slice(0, MAX_CHARACTERS_TASK));
                  }
                }}
                type="text"
                placeholder="Notes"
              className={`input input-bordered input-lg w-full max-w-xs mb-2`}
              />
               <div className="pb-4" style={{ fontSize: '0.75rem', color: remainingCharacters_TASK < 0 ? 'red' : 'inherit' }}>
                {remainingCharacters_TASK}/{MAX_CHARACTERS_TASK} characters remaining
              </div>
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
                    <input type="checkbox" checked={priorityToEdit} onChange={(e) => setpriorityToEdit(e.target.checked)} className="toggle" />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text pr-4">Complete?</span>
                    <input type="checkbox" checked={completeToEdit} onChange={(e) => setcompleteToEdit(e.target.checked)} className="toggle" />
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

