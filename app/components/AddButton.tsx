import React from 'react'
import { useFormStatus } from 'react-dom';

const AddButton = () => {
    const {pending} = useFormStatus();
    return (
    <div>
        <button 
                className="bg-blue-600 mt-5 p-1 shadow-md shadow-blue-400 text-white rounded-lg   w-full"
                type="submit">
                {pending ? 'Adding...' : 'Add'}
            </button>
    </div>
  )
}

export default AddButton