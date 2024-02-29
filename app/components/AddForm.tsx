"use client"
import { useRef } from 'react'

import React from 'react';
import { create } from '../actions';
import AddButton from './AddButton';

const AddForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
  return (
    <div>
        <form className="flex flex-col" 
            action={async(FormData:FormData) => {
            await create(FormData);
            formRef.current?.reset();
            
        }} ref={formRef}>
            <input type="hidden" name="todoId" />
            <input 
            type="text" 
            name="inputData" 
            placeholder="Enter Task" className="border p-1 rounded-md md:text-xl text-sm"
            />
            <AddButton />
        </form>
    </div>
  )
}

export default AddForm