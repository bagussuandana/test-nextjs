import React from 'react'

export default function NavLink({ href, children, ...props }) {
    return (
        <a
            {...props}
            href={href}
            className="hover:text-white hover:bg-gray-700/40 px-4 py-2 text-gray-300 rounded-lg">
            {children}
        </a>
    )
}
