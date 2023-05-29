import React, {useRef, useState} from 'react'
import Menu from '../Menu/Menu'
import styles from './Header.module.css'

import cn from 'classnames'
import Link from 'next/link'

const Header = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [isMenuClicked, setMenuClicked] = useState(false)
    const [height, setHeight] = useState('0px')
    const menu = useRef(null);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setHeight(`${menu.current.scrollHeight}px`)
        } else {
            setBurgerClass("burger-bar unclicked")
            setHeight('0px')
        }
        setMenuClicked(!isMenuClicked)
    }

    return (
        <header>
            <div className='md:flex md:justify-center'>
                <div
                    className='flex flex-col md:flex-row md:justify-between md:items-center md:mt-3 md:px-14 max-w-screen-xl lg:w-full md:w-full'>
                    <div>
                        <h2 className='flex justify-center text-2xl font-bold mt-5 md:mt-0 md:text-xl'>РИТУАЛ
                            ЕВПАТОРИЯ</h2>
                    </div>

                    <div className='primary rounded-xl text-white flex flex-col mx-8 md:flex-row md:mx-0 md:px-3'>
                        <div className='flex flex-row justify-center'>
                            <div className='flex items-center pb-1 md:pb-0 pr-1.5'>
                                <div
                                    className={cn(styles.blink, styles.bg__color, 'flex justify-center p-1 rounded-2xl')}>
                                </div>
                            </div>
                            <span
                                className={cn('block flex justify-center pt-1 text-xl md:items-center md:mr-1 md:py-0 md:my-0 mb-1 md:text-lg', styles.text__color)}>
                                Круглосуточная справочная
                            </span>
                        </div>
                        <strong
                            className={cn('flex justify-center pb-1 text-xl md:items-center md:py-0 md:text-lg text-green-300 tracking-widest', styles.text__color)}>8-978-938-02-21</strong>
                    </div>
                </div>
            </div>
            <div className={cn('secondary flex justify-end mt-4 text-white md:mt-3 md:justify-center')}>
                <nav className='hidden md:block'>
                    <ul className='flex text-white pt-2.5 pb-2'>
                        <li className='text-xs font-medium mr-10 uppercase lg:text-base'><Link href="/" passHref>Главная</Link></li>
                        <li className='text-xs font-medium mr-10 uppercase lg:text-base'>Ритуальные услуги</li>
                        <li className=' text-xs font-medium mr-10 uppercase lg:text-base'>Ритуальные товары</li>
                        <li className=' text-xs font-medium mr-10 uppercase lg:text-base'>Справочная информация</li>
                        <li className=' text-xs font-medium uppercase lg:text-base'>Контакты</li>
                    </ul>
                </nav>

                <div className='block md:hidden flex flex-row p-2'>
                    <div className='flex items-center box-border'>
                        <div className='burger-menu' onClick={updateMenu}>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.borderTop}>
                <Menu height={height} menuRef={menu}/>
            </div>

        </header>
    )
}

export default Header