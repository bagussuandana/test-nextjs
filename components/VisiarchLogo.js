import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../public/logo192.svg"


export default function VisiarchLogo() {
    return (
        <div>
            <Link href="/">
                <a>
                    <Image src={Logo} height={30} width={30} />
                </a>
            </Link>
        </div>
    )
}
