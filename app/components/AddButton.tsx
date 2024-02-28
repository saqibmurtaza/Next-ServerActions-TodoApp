import React from 'react'
import { useFormStatus } from 'react-dom';

const AddButton = () => {
    const {pending} = useFormStatus();
    return (
    <div>
        <button 
                className="bg-black text-white rounded-lg mt-2 p-1 w-full"
                type="submit">
                {pending ? 'Adding...' : 'Add'}
            </button>
    </div>
  )
}

export default AddButton