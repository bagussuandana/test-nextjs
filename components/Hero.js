import React from 'react'
import NavLink from './Navlink'

export default function Hero() {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
            <div className="border-white/10 py-3 border-b">
                <div className="container">
                    <nav className="flex items-center justify-between">
                        <div className="gap-x-2 flex items-center">
                            <a href="#" className="mr-6 font-medium text-white uppercase">Brand</a>
                            <NavLink href="#">Home</NavLink>
                            <NavLink href="#">Articles</NavLink>
                            <NavLink href="#">Gallery</NavLink>
                            <NavLink href="#">About</NavLink>
                            <NavLink href="#">Contact</NavLink>

                        </div>
                        <div className="gap-x-2 flex items-center">
                            <a href="#" className="hover:text-white hover:bg-gray-700/40 px-4 py-2 text-gray-300 rounded-lg">Sign in</a>
                            <a href="#" className="hover:text-white hover:bg-gray-700/40 px-4 py-2 text-gray-300 rounded-lg">Sign up</a>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="container">
                <div className="w-2/3">
                    <div className="py-16 text-white">
                        <h1 className="text-3xl font-bold">New Revolution</h1>
                        <p className="mt-4 mb-6 text-xl font-light leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#" className="decoration-sky-500 text-sky-400 font-medium underline">Dolorem quam</a>, recusandae quis dolorum veritatis nulla, nemo consequuntur temporibus quisquam expedita libero est facere ipsum laboriosam eveniet itaque. Rem, dicta temporibus?</p>
                        <a href="#" className="bg-white text-gray-900 px-6 py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-400">
                            Browse
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
