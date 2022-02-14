import React from 'react'

export default function Select({ children, ...props }) {
    return (
        <select
            {...props}
            className='focus:border-sky-300 focus:ring focus:ring-sky-200/50 block w-full transition duration-300 border-gray-300 rounded-md shadow-sm'
        >
            {children}
        </select>
    )
}
