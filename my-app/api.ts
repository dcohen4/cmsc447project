import { todo } from "node:test";
import { ITask } from "./types/types";

const baseURL = 'http://localhost:3001';

export const getAllTodos = async ():  Promise<ITask[]> =>{
 const res = await fetch(`${baseURL}/tasks`);
 const todos = await res.json();
 return todos;
} 