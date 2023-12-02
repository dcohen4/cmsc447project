import { todo } from "node:test";
import { ITask } from "./types/types";

const baseURL = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    // Return tasks from local storage
    return JSON.parse(localStorage.getItem('tasks')) || [];

  } catch (error) {
    console.error('Error in getAllTodos:', error);
    throw error; 
  }
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  try {
    // Get existing tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the array
    tasks.push(todo);

    // Update local storage with the new tasks
    localStorage.setItem('tasks', JSON.stringify(tasks));

    return todo;

  } catch (error) {
    console.error('Error in addTodo:', error);
    throw error;
  }
}

export const editTodo = async (todo: ITask): Promise<ITask> => {
  try {
    // Get existing tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Find the index of the task to be edited
    const index = tasks.findIndex((task) => task.id === todo.id);

    // If the task is found, update it
    if (index !== -1) {
      tasks[index] = todo;

      // Update local storage with the edited tasks
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    return todo;

  } catch (error) {
    console.error('Error in editTodo:', error);
    throw error;
  }
}


export const removeTodo = async (id: string): Promise<void> => {
  try {
    // Get existing tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Filter out the task with the specified ID
    const updatedTasks = tasks.filter((task) => task.id !== id);

    // Update local storage with the remaining tasks
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

  } catch (error) {
    console.error('Error in removeTodo:', error);
    throw error;
  }
}
