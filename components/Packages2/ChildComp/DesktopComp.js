import React from "react";
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import toStr from './IntToStrFunc'
let item = 0;
const DesktopComp = ({item, priceNow, visibleModal, hiddenModal}) => {

    return(
        <div className='bg-white rounded-lg md:mr-4 last:mr-0 md:px-6 flex flex-col justify-between'>
            <div>
                <div className='flex flex-row pt-7 pb-5 items-center justify-between'>
                    <h3 className='text-xl font-semibold'>{item.name}</h3>
                    <p className='text-2xl font-bold text-sky-900'>{toStr(priceNow[item.item])}</p>
                </div>

                <div className='border-b border-gray-300'></div>

                <div className='flex flex-col h-max justify-between'>
                    <div>
                        <div className='flex flex-row pt-5 pb-2'>
                            <p className='text-neutral-400 font-medium'>Ритуальные товары</p>
                            <div className='flex items-center pl-1'>
                                <AiOutlineExclamationCircle color='#a3a3a3' size={24}/>
                            </div>
                        </div>
                        <div>
                            {item.products.map(product =>
                                <div className='flex flex-row pb-3' key={product.id}>
                                    <div className='flex items-center pr-1'>
                                        <AiOutlineCheckCircle color='#4ade80' size={24}/>
                                    </div>
                                    <p>{product.product}</p>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-row pt-1 pb-2'>
                            <p className='text-neutral-400 font-medium'>Ритуальные услуги</p>
                            <div className='flex items-center pl-1'>
                                <AiOutlineExclamationCircle color='#a3a3a3' size={24}/>
                            </div>
                        </div>
                        <div>
                            {item.services.map(service =>
                                <div className='flex flex-row pb-3' key={service.id}>
                                    <div className='pr-1'>
                                        <AiOutlineCheckCircle color='#4ade80' size={24}/>
                                    </div>
                                    <p className='leading-5'>{service.product}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex justify-center pb-5 h-max pt-5'>
                    <button
                        onClick={() => visibleModal()}
                        className='w-10/12 rounded-md border-2 border-blue-900 px-6 py-2 font-bold text-lg text-blue-900'>Оформить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DesktopComp