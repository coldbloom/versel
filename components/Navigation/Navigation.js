import React from 'react'
import {TiArrowBack} from "react-icons/ti";
import Link from "next/link";

const Navigation = () => {
    return (
        <div className='px-4 md:px-10 flex flex-row items-center'>
            <TiArrowBack/>
            <Link href="/">
                <a className='p-2 font-semibold text-blue-900'>На Главную</a>
            </Link>
            <TiArrowBack/>
            <Link href="/Uslugi">
                <a className='p-2 font-semibold text-blue-900'>Ритуальные услуги</a>
            </Link>
        </div>
    )
}

export default Navigation