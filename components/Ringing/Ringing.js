import React from "react";
import s from './Ringing.module.css'
import cn from 'classnames'
import {FiPhone} from 'react-icons/fi'
import {GoMail} from 'react-icons/go'
import {ImWhatsapp} from 'react-icons/im'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaViber} from 'react-icons/fa'
import {FiMapPin} from 'react-icons/fi'

const Ringing = () => {
    return (
        <div className={cn('pb-10', s.color)}>
            <p className='text-center text-2xl font-bold pt-10'>Есть Вопросы?</p>
            <p className='text-center text-2xl font-bold pt-1'>Обратитесь по телефону за бесплатной консультацией</p>
            <p className='text-center pt-2 pb-12 md:pb-8 text-xs px-4'>Специалисты проконсультируют по вопросам похорон,
                кремации, сбору документов и о ритуальных товарах</p>
            <div className='flex flex-col items-center md:flex-row md:justify-center'>
                <div>
                    <div className='flex flex-row items-center pb-2'>
                        <FiPhone size={22} color="rgb(30 58 138)"/>
                        <a className='text-xl pl-2 text-blue-900 underline font-bold'
                           href="tel:+79789380221"
                        >
                            +7&nbsp;(978)&nbsp;938-02-21
                        </a>
                    </div>
                    <div className='flex flex-row items-center'>
                        <GoMail size={22} color="rgb(30 58 138)"/>
                        <a className='text-xl pl-2 text-blue-900 underline font-bold'
                           href="mailto:ritevp@gmail.com?subject=Запрос на информацию&body=Здравствуйте, я хотел бы получить дополнительную информацию о вашей компании."
                        >
                            ritevp@gmail.com
                        </a>
                    </div>
                </div>
                <div
                    className='border-2 border-blue-900 rounded-xl w-fit mt-10 md:mt-0 md:ml-10 px-4 py-2 flex flex-col items-center'>
                    <div className='flex flex-row items-center pb-2'>
                        <ImWhatsapp color='#25D366' size={22}/>
                        <a href="https://wa.me/79789380221" className={cn('underline pl-1', s.wats)}>WhatsApp</a>
                    </div>
                    <div className='flex flex-row items-center pb-2'>
                        <FaTelegramPlane color="#229ED9" size={22}/>
                        <a href="tg://resolve?domain=ritevp&text=Здравствуйте, Виталий" className={cn('underline pl-1', s.tg)}>Telegram</a>
                    </div>
                    <div className='flex flex-row items-center'>
                        <FaViber color="#7360F2" size={22}/>
                        <a href="viber://add?number=79789380221&text=Здравствуйте, Виталий" className={cn('underline pl-1', s.vb)}>Viber</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center mt-10 items-center px-10'>
                <FiMapPin color="rgb(30 58 138)" className={s.iconWidth}/>
                <strong className='text-xl pl-2 text-blue-900'>г. Евпатория, проспект Победы 42, торговое место
                    №62</strong>
            </div>
        </div>
    )
}

export default Ringing