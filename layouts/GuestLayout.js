import Head from 'next/head'
import React, { useEffect } from 'react'
import VisiarchLogo from '../components/VisiarchLogo'

export default function GuestLayout({ header, title, children }) {
    return (
        <div className='flex items-center justify-center min-h-screen antialiased tracking-tighter text-gray-800 bg-gray-100'>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <div className='md:w-1/3 w-full'>
                <div className='rounded-2xl bg-white shadow-sm'>
                    <div className='flex justify-between px-6 pt-6 pb-6'>
                        <VisiarchLogo />
                        <h1 className='text-2xl font-light uppercase'>{header}</h1>
                    </div>
                    <div className='px-6 pb-6'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
