"use server"

import { revalidatePath } from "next/cache";
import prisma from "./db";

{/*Server Action: async fucntion to get input from user thru Form & transfer to DB */}
export async function create(FormData:FormData){

    const inputFromForm = FormData.get('inputData') as string;
    await prisma.todoData.create({
      data:{
        input: inputFromForm
      }
    });
    revalidatePath('/')
    }
  {/*Server Action: Edit Todo Functionality */}
    export async function edit(FormData:FormData){

      
      const inputFromEditTodoForm = FormData.get('editDeleteForm') as string //editTodo is name of the Form
      const idInputFromEditTodoForm = FormData.get('id') as string
      await prisma.todoData.update({
        where: {
          id: idInputFromEditTodoForm, //update specific id
        },
        data: {
          input: inputFromEditTodoForm,
        }
      })
      revalidatePath('/')  
    }
    
    export async function deleteItem(FormData:FormData) {
    
      const idInputFromEditTodoForm = FormData.get('id') as string;
      await prisma.todoData.delete({
        where: {
          id: idInputFromEditTodoForm
        }
      })
      revalidatePath('/')
    }