import React from 'react'

const ModuleCompReasons = ({value}) => {
    return(
        <div className='border-2 shadow-xl rounded border-blue-900 my-2 mb-2 md:mb-6 md:mr-4 last:md:mr-2 first:md:ml-2 md:first:pr-1 md:first:pr-1'>
            <p className='flex justify-center leading-5 px-4 py-3 text-center font-bold font-medium text-blue-900'>{value}</p>
        </div>
    )
}

export default ModuleCompReasons