import React, {useRef, useState} from 'react'
import Link from 'next/link'
import cn from 'classnames'
import s from './Menu.module.css'

const Menu = ({height, menuRef}) => {

    return (
        <div className={cn('secondary', s.alertBlock)} style={{maxHeight: height}} ref={menuRef}>
            <nav>
                <ul className={cn('flex flex-col justify-center text-white', s.alertText)}>
                    <li className='flex justify-center text-xl pt-3 pb-1'><Link href='/' passHref>Главная</Link></li>
                    <li className='flex justify-center text-xl pt-2 pb-2'><Link href='/Uslugi' passHref>Ритуальные услуги</Link></li>
                    <li className='flex justify-center text-xl pt-2 pb-2'><Link href='/' passHref>Ритуальные товары</Link></li>
                    <li className='flex justify-center text-xl pt-2 pb-2'><Link href='/' passHref>Справочная информация</Link></li>
                    <li className='flex justify-center text-xl pt-2 pb-4'><Link href='/kontakty' passHref>Контакты</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu