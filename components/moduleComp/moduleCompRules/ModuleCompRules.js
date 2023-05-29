import React from 'react'

const ModuleCompRules = ({item}) => {
    return(
        <div className='flex row rounded-2xl p-2 border-2 border-slate-200 mt-4 first:mt-0 md:flex-wrap md:w-96 md:first:mt-4 md:mr-2 md:ml-2 lg:w-64'>
            <div className='flex justify-center items-center primary py-2 px-10 rounded-2xl font-bold text-3xl lg:px-4'>
                <span className='block text-white '>
                    {item.num}
                </span>
            </div>
            <div className='ml-5 flex flex-col justify-center'>
                <span className='block text-sm leading-3 font-medium text-slate-400'>
                    {item.text}
                </span>
                <strong>
                    {item.number}
                </strong>
                <span className='block leading-4 mt-0 md:w-60 lg:w-40'>
                    {item.description}
                </span>
            </div>
        </div>
    )
}

export default ModuleCompRules