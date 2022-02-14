import React from 'react'
import { FiHome, FiTag } from "react-icons/fi";
import { VscSymbolRuler, VscInfo } from "react-icons/vsc";
import { RiCustomerService2Line } from "react-icons/ri";
import { BsMoonStars } from "react-icons/bs"
import Link from 'next/link';
import Tooltip from "../components/Tooltip";
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import VisiarchLogo from '../components/VisiarchLogo';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function AppLayout({ title, children }) {
    const router = useRouter();
    return (
        <main className="flex flex-col h-screen">
            <Head>
                <title>
                    {title ? title : "Visiarch"}
                </title>
            </Head>
            <header className='md:hidden sticky top-0 z-50 flex items-center justify-between w-full h-12 bg-white shadow-sm'>
                <div className='px-6'>
                    <VisiarchLogo />
                </div>
            </header>
            <div className="flex flex-1 overflow-hidden">
                <div className="md:flex flex-col items-center justify-between hidden w-24 p-4 bg-white border-r border-gray-200">
                    <VisiarchLogo />
                    <div>
                        <div className='flex flex-col'>

                            <Tooltip tooltipText="Home">
                                <Link href="/">
                                    <a className='py-5'>
                                        <FiHome size={20} color={router.pathname == "/" ? "black" : "gray"} />
                                    </a>
                                </Link>
                            </Tooltip>
                            <Tooltip tooltipText="Tags">
                                <Link href="/tags">
                                    <a className='py-5'>
                                        <FiTag size={20} color={router.pathname == "/tags" ? "black" : "gray"} />
                                    </a>
                                </Link>
                            </Tooltip>
                            <Tooltip tooltipText="About Us">
                                <Link href="/about">
                                    <a className='py-5'>
                                        <VscInfo size={20} color={router.pathname == "/about" ? "black" : "gray"} />
                                    </a>
                                </Link>
                            </Tooltip>
                            <Tooltip tooltipText="Projects">
                                <Link href="/projects">
                                    <a className='py-5'>
                                        <VscSymbolRuler size={20} color={router.pathname == "/projects" ? "black" : "gray"} />
                                    </a>
                                </Link>
                            </Tooltip>
                            <Tooltip tooltipText="Service">
                                <Link href="/service">
                                    <a className='py-5'>
                                        <RiCustomerService2Line size={20} color={router.pathname == "/service" ? "black" : "gray"} />
                                    </a>
                                </Link>
                            </Tooltip>

                        </div>
                    </div>
                    <div className='mb-5'>
                        <BsMoonStars size={20} />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className="bg-gray-50 paragraph md:py-10 md:pl-12 md:pr-80 container flex flex-1 py-6 pl-6 pr-6 overflow-x-auto text-justify">
                        {children}
                    </div>
                </div>
                <div className='md:flex w-72 absolute right-0 hidden h-screen mr-4 overflow-x-auto bg-white border-l border-gray-200'>
                    <div className='w-full p-6'>
                        <Sidebar />
                    </div>
                </div>
            </div>
            <div
                style={{
                    boxShadow: "rgb(0 0 0 / 20%) 0px -1px 2px -1px"
                }}
                className='md:hidden absolute bottom-0 z-50 flex items-center justify-between w-full h-12 bg-blue-500'
            >
                <div className='w-full'>
                    <Footer />
                </div>
            </div>
        </main>

    )
}
