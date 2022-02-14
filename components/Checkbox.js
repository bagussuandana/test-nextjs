import React from 'react'

export default function Checkbox({ label, forInput, ...props }) {
    return (
        <div className='gap-x-2 flex items-center'>
            <input className='text-sky-500 focus:ring-0 border-gray-300 rounded' {...props} />
            <label htmlFor={forInput} className='select-none'>{label}</label>
        </div>
    )
}
