import React from 'react'
import ModuleCompRules from "../moduleComp/moduleCompRules/ModuleCompRules";
import ModuleCompReasons from "../moduleComp/ModuleCompReasons/ModuleCompReasons";
import Link from "next/link"

const Rules = () => {
    const mas = [
        {
            id: 'r001',
            num: 1,
            number: '8-978-938-02-21',
            text: 'По телефону:',
            description: 'Вызвать ритуального агента',
        },
        {
            id: 'r002',
            num: 2,
            number: '02',
            text: 'По телефону:',
            description: 'Вызвать сотрудника полиции',
        },
        {
            id: 'r003df',
            num: 3,
            number: '03',
            text: 'По телефону:',
            description: 'Вызвать бригаду скорой помощи',
        },
        {
            id: '_id4wew',
            num: 4,
            number: null,
            text: null,
            description: 'Подготовить паспорт умершего',
        },
    ]
    const reasons = [
        'С нами надежно. Большой опыт работы на рынке ритуальных услуг!',
        'У нас гибкие цены, льготы и скидки!',
        'Индивидуальный подход к каждому клиенту!',
        'Мы работаем круглосуточно!',
    ]
    return(
        <div className='pt-16 md:pt-0 pb-10'>
            <div className='md:flex md:justify-center'>
                <div className='px-4 md:px-10 md:flex md:flex-wrap md:justify-between max-w-screen-xl md:w-full'>
                    {mas.map((item) => <ModuleCompRules key={item.id} item={item}/>)}
                </div>
            </div>

            <div className='flex justify-center mt-2'>
                <div className='flex justify-center primary w-32 rounded'>
                    <Link href="/chelovek" passHref><a className='text-white p-2'>ПОДРОБНЕЕ</a></Link>
                </div>
            </div>

            <div className='md:flex md:justify-center'>
                <div className='max-w-screen-xl'>
                    <h2 className='flex justify-center text-xl font-medium mt-6 text-blue-900'>4 причины выбрать нас?</h2>
                    <div className='px-4 md:px-10 md:grid md:grid-cols-4 flex flex-col'>
                        {reasons.map((reason) => <ModuleCompReasons key={reasons.indexOf(reason) *11} value={reason}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rules