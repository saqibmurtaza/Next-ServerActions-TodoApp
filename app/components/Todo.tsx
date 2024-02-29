import prisma from "../db";
import { create, deleteItem, edit } from "../actions";
import SaveButton from "./SaveButton";
import DeleteButton from "./DeleteButton";
import AddForm from "./AddForm";

{/*Function to get Data from DB */}
async function getData(){
  const data = await prisma.todoData.findMany({
    select: {
      input: true,
      id: true
    },
    orderBy:{
      createdAt:'desc'
    }
  });
  return data;
}

export default async function Todo() {
  const data = await getData();
  
  return (
    <div className="bg-blue-200 h-screen w-screen flex flex-col items-center justify-center">
      <div className="w-[90vw] md:w-[70vw] text-center">
        <h1 className="font-bold mb-2 text-2xl md:text-5xl md:mb-5">To-dos</h1>
        <p className="mb-5 text-center text-lg md:text-3xl">
          Welcome to our simple yet effective Todo app !<br/>With this app, you can easily manage your tasks, ensuring nothing slips through the cracks.
        </p>  
      </div>
      
        <div className="bg-blue-500 w-[90vw] md:w-[70vw] p-5 shadow-blue-600 shadow-lg">
          <AddForm />
            <div className="mt-5 flex flex-col gap-y-2">
               
               {data.map((todo) =>
               <div  key={todo.id} className="flex gap-x-2">
                  
                       <form action={edit} className="flex flex-grow md:flex-grow">
                         <input
                           type="hidden"
                           name="id"
                           value={todo.id}
                         />
                         <input
                           type="text"
                           name="editDeleteForm"
                           defaultValue={todo.input}
                           className="border mr-2 ps-1 rounded-md shadow-md shadow-blue-400 md:text-xl text-sm w-full" />
                         <SaveButton />
                       </form>
                  
                  
                       <form action={deleteItem}>
                           <input
                           type="hidden"
                           name="id"
                           value={todo.id}
                           />
                           <DeleteButton />
                       </form>
                  
                  
               </div>
              
               )}
          
       </div>  
        </div>
    </div>
  );
}
