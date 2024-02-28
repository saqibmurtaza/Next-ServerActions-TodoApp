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
    <div className="h-screen w-screen flex items-center justify-center">

        <div className="bg-white border shadow-xl p-10 w-[40vw]">
            <AddForm />
            <div className="mt-5 flex flex-col gap-y-2">
               
               {data.map((todo) =>
               <div  key={todo.id} className="flex">
                  
                       <form action={edit} className="flex">
                         <input
                           type="hidden"
                           name="id"
                           value={todo.id}
                         />
                         <input
                           type="text"
                           name="editDeleteForm"
                           defaultValue={todo.input}
                           className="border p-1 w-full" />
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
