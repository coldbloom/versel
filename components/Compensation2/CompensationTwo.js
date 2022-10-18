import React from 'react'

const CompensationTwo = () => {
    return (
        <div className='flex justify-center'>
            <div className='px-4 md:px-10 pt-10 pb-10 w-full max-w-screen-xl'>
                <div className='border rounded pb-4 md:pb-0 flex flex-col lg:flex-row'>
                    <div>
                        <div className='flex flex-col md:flex-row w-full'>
                            <div className='rounded  bg-slate-200 md:flex items-center'>
                                <h2 className='px-4 py-4 text-center font-bold text-2xl md:py-0'>Денежная&nbsp;компенсация</h2>
                            </div>
                            <div className='border-b text-center w-full'>
                                <h3 className='text-blue-700 px-4 py-3 text-lg leading-6 text-center font-medium align-middle shadow md:shadow-none'>Поможем оформить
                                    документы и получить пособие на погребение</h3>
                            </div>
                        </div>
                        <div className='px-4 py-3 text-center'>
                            <p className='pt-3 text-sm font-semibold leading-3'>Размер социального пособия на погребение в 2022
                                году составляет <strong className='text-xl'>14&nbsp;589₽</strong></p>
                            <p className='pt-3 text-sm'>Похоронный агент Городской службы «РИТУАЛ» поможет собрать документы,
                                необходимые для оформления пособия на погребение.Останется только получить пособие в пенсионном
                                фонде или управлении социальной защиты.</p>
                            <p className='pt-3 pb-3 text-sm'>Получить денежную компенсацию в размере 14&nbsp;589₽ вправе
                                человек, затративший собственные средства на организацию похорон.</p>
                        </div>
                    </div>
                    <div className='md:mx-0 mx-4 px-4 bg-blue-900 rounded text-white text-center md:flex md:justify-center flex-col'>
                        <p className='text-sm md:text-base leading-5 py-3'>Узнайте, как получить пособие на погребение по круглосуточному
                            телефону горячей линии</p>
                        <strong className='md:text-lg'>8-978-938-02-21</strong>
                        <p className='text-xs md:text-base pb-3 pt-3'>Консультация по вопросам кремации и организации похорон проводится
                            бесплатно</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompensationTwo