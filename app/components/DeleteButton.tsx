"use client"

import { useFormStatus } from "react-dom"

export default function DeleteButton() {
    const {pending} = useFormStatus();
    
    return(
        <div>
            <button className="butt">
                {pending ? 'Deleting...' : 'Delete'}
            </button>
        </div>
    )
}