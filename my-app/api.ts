import { todo } from "node:test";
import { ITask } from "./types/types";

const baseURL = 'http://localhost:3001';

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    const res = await fetch(`${baseURL}/tasks`, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const todos = await res.json();
    return todos;
  } catch (error) {
    console.error('Error in getAllTodos:', error);
    throw error; // Re-throw the error to propagate it
  }
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  try {
    const res = await fetch(`${baseURL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const newTodo = await res.json();
    return newTodo;
  } catch (error) {
    console.error('Error in addTodo:', error);
    throw error; // Re-throw the error to propagate it
  }
}
