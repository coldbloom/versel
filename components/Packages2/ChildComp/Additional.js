import React from "react";
import cn from "classnames";
import style from "../../Main/Main.module.css";
import {BsFillExclamationCircleFill} from 'react-icons/bs'

const Additional = () => {
    return (
        <div>
            <div className=''>
                <div className='flex justify-center'>
                    <div className='md:py-10 py-16 w-full max-w-screen-xl xl:flex xl:justify-center'>
                        <div
                            className={cn(style.mxCustom, 'absolute -my-8 flex md:flex-row flex-col items-center rounded')}>
                            <div className='md:px-10 md:py-10'>
                                <BsFillExclamationCircleFill color={'#0c4a6e'}
                                                             className={cn('md:mt-0 mt-6 bg-white p-0.5 rounded-full', style.iconSize)}/>
                            </div>
                            <div className='md:flex md:flex-col text-white'>
                            <span className={cn('md:text-left block text-center text-sm leading-5 pt-2 px-2 md:text-2xl md:leading-6 md:pb-5 md:pt-6 md:pr-10', style.extraLight)}>
                                План похорон может быть скорректирован с учётом ваших пожеланий и финансовых возможностей
                            </span>
                                <p className={cn('md:text-left text-center md:pb-5 pb-6 md:px-4 md:text-base md:pt-2 text-xs leading-4 pt-5 pb-4 px-1', style.extraLight)}>
                                    Получите консультацию и
                                    оформите заказ по телефону горячей линии +7&nbsp;(978)&nbsp;938&#8209;02&#8209;21
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center bg-white '>
                    <div className='flex md:flex-row flex-col pt-32 px-4 md:px-10 pb-12 w-full max-w-screen-xl md:px-10 px-4'>
                        <div className='mb-4 px-6 md:mb-0 bg-blue-900 rounded text-white md:px-7 md:w-1/3 md:mr-4 shadow'>
                            <h3 className='pt-5 pb-3 text-2xl font-bold md:pt-6 md:text-2xl md:font-bold md:pb-4'>Рассрочка
                                0 / 0 / 12</h3>
                            <p className='text-sm font-bold md:pb-3 pb-2 leading-4'>Похороны можно оформить в рассрочку</p>
                            <p className='text-sm font-light leading-4 pb-4'>(Переплата 0, Первый взнос 0, До 12
                                месяцев)</p>
                        </div>
                        <div className='mb-4 px-6 md:mb-0 bg-white rounded md:px-6 md:w-1/3 md:mr-4 shadow'>
                            <h3 className='pt-5 pb-3 text-2xl font-bold md:pt-6 md:text-2xl md:font-bold md:pb-4'>Без
                                скрытых платежей</h3>
                            <p className='text-sm font-bold  leading-4 pb-3 '>Стоимость товаров и услуг фиксируется в
                                договоре.</p>
                            <p className='text-sm font-bold  leading-4 pb-4'>Это исключает доплаты и незапланированные
                                затраты.</p>
                        </div>
                        <div className='px-6 bg-white rounded md:md:px-7 md:w-1/3 shadow'>
                            <h3 className='pt-5 pb-3 text-2xl font-bold md:pt-6 md:text-2xl md:font-bold md:pb-4'>Индивидуальный
                                подход</h3>
                            <p className='text-sm font-bold md:leading-5 leading-4 pb-4'>Любой план похорон может быть
                                скорректирован с учётом ваших пожеланий и финансовых
                                возможностей</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Additional