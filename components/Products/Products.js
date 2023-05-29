import React from "react";
import ChildComponent from "./ChildComponent";
import Link from "next/link"

const Products = () => {
    return (
        <div className='secondary flex justify-center'>
            <div className='w-full max-w-screen-xl md:px-10 px-4 text-white pb-10 pt-10'>
                <h2 className='font-bold text-3xl flex justify-center pb-5'>Товары</h2>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-row pb-4 md:w-full md:pr-2'>
                        <ChildComponent name={'Венки'} clas={'mr-2'}/>
                        <ChildComponent name={'Гробы'} clas={'ml-2'}/>
                    </div>
                    <div className='flex flex-row pb-4 md:w-full md:px-2'>
                        <ChildComponent name={'Кресты'} clas={'mr-2'}/>
                        <ChildComponent name={'Памятники'} clas={'ml-2'}/>
                    </div>
                    <div className='flex flex-row pb-4 md:w-full md:pl-2'>
                        <ChildComponent name={'Текстиль'} clas={'mr-2'}/>
                        <ChildComponent name={'Аксессуары' }clas={'ml-2'}/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='border-2 border-white text-white rounded font-bold px-5 py-2 mt-3'>
                        <Link href='/'>Все товары</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products