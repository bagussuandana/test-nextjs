import React from 'react'

export default function Button({ children, className, ...props }) {
    return (
        <button
            {...props}
            className={`${className ? className : 'bg-sky-500 text-white hover:bg-sky-700'} border border-transparent px-6 py-2.5 text-sm font-medium transition duration-300 focus:outline-none focus:ring rounded-full`}
        >
            {children}
        </button>
    )
}
