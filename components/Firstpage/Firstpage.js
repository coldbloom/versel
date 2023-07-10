import React from "react";
import style from "../Main/Main.module.css";
import {AiFillPhone} from "react-icons/ai";
import Image from "next/image";
import cn from 'classnames'
import mainBg from "../../assets/images/evpatoriya-plyus.jpg"

const FirstPage = () => {
    return(
        <div className='-mt-0.5'>
            <div className={'primary rounded-xl z-10 text-white flex flex-col absolute lg:w-ful md:flex-row md:justify-center md:py-2' + ' ' + style.div}>
                <div className='flex justify-center mt-2 md:mt-0 md:mr-2'>
                    <AiFillPhone className={cn(style.phoneSize, 'mr-1')}/>
                    <span className='block md:text-2xl'>Круглосуточная справочная</span>
                </div>
                <strong className='flex justify-center mb-2 md:mb-0 md:text-2xl tracking-wide'>
                    8&thinsp;-&thinsp;978&thinsp;-&thinsp;938&thinsp;-&thinsp;02&thinsp;-&thinsp;21
                </strong>
            </div>
            <div className={style.left}>
                <div className={'mt-24 z-10 absolute max-w-2xl text-white' + ' ' + style.custom}>
                    <div className='flex justify-center text-center mx-auto'>
                        <h1 className='text-xl font-bold md:text-2xl md:pt-20 flex justify-center mx-auto tracking-wider'>РИТУАЛЬНЫЕ УСЛУГИ, ОРГАНИЗАЦИЯ ПОХОРОН В ЕВПАТОРИИ, САКАХ И УЮТНОЕ</h1>
                    </div>
                </div>
            </div>

            <div>
                <div className={`mt-12 max-w-2xl mx-auto ${style.image}`}>
                    <Image
                        src={mainBg}
                        alt="Собор"
                        className={`mt-5 w-full h-full object-cover`}
                    />
                </div>
            </div>


            <div className={cn(style.absolute__class, 'flex items-center row w-full primary text-white md:justify-center md:-mt-2 z-20 relative')}>
                <div className='flex row px-6'>
                    <strong className='text-3xl text-center mr-2'>0</strong>
                    <p className='text-2xl text-center'>руб.</p>
                </div>
                <div className='pr-5'>
                    <p className='leading-5 font-bold py-2 text-base'>БЕСПЛАТНАЯ ПЕРЕВОЗКА УСОПШЕГО В МОРГ</p>
                </div>
            </div>
        </div>
    )
}

export default FirstPage