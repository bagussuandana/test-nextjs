import React from 'react'

export default function SearchForm({ className, ...props }) {
    return (
        <div className='flex justify-center'>
            <form className='xl:w-96 mb-3'>
                <input className={
                    className ?
                        className :
                        "form-control block w-full px-4 py-2 text-base font-light text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                }
                    type="search" {...props}
                />
            </form>
        </div>
    )
}
