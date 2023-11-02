import { getAllTodos } from "@/api";
import { TodoList } from "@/components/TodoList";
import DeleteTask from "@/components/DeleteTask"
import AddTask from "@/components/AddTask";
import EditTask from "@/components/EditTask";
import ViewTask from "@/components/ViewTask";


export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);


  return (
    <main className="max-w-4xl mx-auto mt-15">
      <div className="text-left my-10 ">
        <h1 className="text-2xl font-bold">Task Management App</h1>

      </div>
     
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '25vh' }}>
        <h3 className="font-bold text-lg"></h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '150%', margin: '150px' }}>
          <div style={{ flex: 2, marginRight: '200px' }}>
          <TodoList tasks={tasks} />
          </div>
          <div style={{ flex: 1, marginLeft: '100px' }}>
            
            <ViewTask></ViewTask>
            <AddTask></AddTask>
            <EditTask></EditTask>
            <DeleteTask></DeleteTask>
          </div>
        </div>
        
      </div>
    </main>
  )
}
