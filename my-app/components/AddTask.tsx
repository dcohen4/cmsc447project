'use client';

import Modal from "./Modal";
import React, { FormEventHandler, useState } from 'react';
import { BiSolidCalendarPlus } from 'react-icons/bi';
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
  const router = useRouter();
  const initialTodo = {
    id: uuidv4(),
    taskname: "",
    text: "",
    priority: false,
    date: ""
  };

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newTask, setNewTask] = useState<string>("");
  const [newDate, setNewDate] = useState<string>("");
  const [newPriority, setPriority] = useState<boolean>(false);

  // State variables to track validation errors
  const [taskNameError, setTaskNameError] = useState<boolean>(false);
  const [taskError, setTaskError] = useState<boolean>(false);
  const [dateError, setDateError] = useState<boolean>(false);

  const isSubmitDisabled = !newTaskName || !newTask || !newDate; // Check if any of the required fields are empty

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // Reset error states
    setTaskNameError(false);
    setTaskError(false);
    setDateError(false);

    // Validate the form fields before submitting
    if (!newTaskName) {
      setTaskNameError(true);
    }
    if (!newTask) {
      setTaskError(true);
    }
    if (!newDate) {
      setDateError(true);
    }

    if (newTaskName && newTask && newDate) {
      // If all fields are filled, submit the form
      await addTodo({
        id: "",
        taskname: newTaskName,
        text: newTask,
        priority: newPriority,
        date: newDate
      });

      setNewTaskName("");
      setNewTask("");
      setNewDate("");
      setPriority(false);
      setModalOpen(false);
      router.refresh();
    }
  }

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className='btn hover-bg-slate-800 w-48 h-48 px-12 py-12 border-radius-100 mb-4 shadow-lg rounded-3xl border-black border-2'>
        <BiSolidCalendarPlus className='' size={75} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
        <form onSubmit={handleSubmitNewTodo}>
          <div className='modal-action' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', alignContent: 'space-evenly' }}>
            <div style={{ marginRight: '0px' }}>
              <h3 className="font-bold text-lg mb-1">Please Enter Your Tasks</h3>
              <input
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
                type="text"
                placeholder="Enter Task Name"
                className={`input input-bordered w-full max-w-xs mb-2 ${taskNameError ? 'error' : ''}`}
              />
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                type="text"
                placeholder="Notes"
                className={`input input-bordered input-lg w-full max-w-xs mb-2 ${taskError ? 'error' : ''}`}
              />
              <input
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                type="date"
                placeholder="Date" className={`input input-bordered input-lg w-full max-w-xs mb-6 ${dateError ? 'error' : ''}`}
              />
            </div>
            <div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text pr-4">Priority?</span>
                  <input type="checkbox" onChange={(e) => setPriority(e.target.checked)} className="toggle" />
                </label>
              </div>
            </div>
          </div>
          <div className=" content-evenly pt-6">
            <button className={`btn btn-primary w-full mb-2`} disabled={isSubmitDisabled}>Submit</button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTask;
