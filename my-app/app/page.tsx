import { getAllTodos } from "@/api";
import AddTask from "@/components/AddTask";
import { TodoList } from "@/components/TodoList";


export default async function Home() {
  const tasks = await getAllTodos(); 
  // console.log(tasks.at(1)?.taskname);

    // Add this code to log the tasknames
    tasks.forEach((task) => {
      console.log(task);
    }); 
 
  return (
    <main className="max-w-4xl mx-auto mt-15"> 
     <div className="text-left my-10 ">
      <h1 className="text-2xl font-bold">Task Management App</h1>
      
     </div>

     <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'flex-end',height: '25vh'  }}>
      <AddTask></AddTask>
     </div>
     <TodoList tasks = {tasks}/>
    </main>
  )
}
