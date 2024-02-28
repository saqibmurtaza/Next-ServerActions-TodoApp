"use client"

import { useFormStatus } from "react-dom"

export default function SaveButton() {
    const {pending} = useFormStatus();

    return(
        <div>
            <button className="butt">
                {pending ? 'Saving...' : 'Save'}
            </button>
        </div>
    )
}
