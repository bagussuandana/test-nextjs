import React from 'react'
import { FiHome, FiTag } from "react-icons/fi";
import { VscSymbolRuler, VscInfo } from "react-icons/vsc";
import { RiCustomerService2Line } from "react-icons/ri";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GlobalContext } from '../lib/recoil-atoms';

export default function Footer() {
    const router = useRouter();
    return (

        <div className='grid w-full grid-cols-5 gap-4 p-4 bg-white'>

            <Link href="/">
                <a className='flex items-center justify-center'>
                    <FiHome size={24} color={router.pathname == "/" ? "black" : "gray"} />
                </a>
            </Link>


            <Link href="/tags">
                <a className='flex items-center justify-center'>
                    <FiTag size={24} color={router.pathname == "/tags" ? "black" : "gray"} />
                </a>
            </Link>


            <Link href="/about">
                <a className='flex items-center justify-center'>
                    <VscInfo size={24} color={router.pathname == "/about" ? "black" : "gray"} />
                </a>
            </Link>


            <Link href="/projects">
                <a className='flex items-center justify-center'>
                    <VscSymbolRuler size={24} color={router.pathname == "/projects" ? "black" : "gray"} />
                </a>
            </Link>


            <Link href="/service">
                <a className='flex items-center justify-center'>
                    <RiCustomerService2Line size={24} color={router.pathname == "/service" ? "black" : "gray"} />
                </a>
            </Link>

        </div>

    )
}
