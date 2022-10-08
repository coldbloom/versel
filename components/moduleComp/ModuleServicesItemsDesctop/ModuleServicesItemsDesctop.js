import React from "react";

const ModuleServicesItemsDesctop = ({service, content, papaFunc }) => {
    const func = () => {
        papaFunc(content)
    }

    return (
        <div>
            <div className='' onClick={() => func(content={content})}>
                <p className='text-white'>{service.name}</p>
            </div>
        </div>
    )
}

export default ModuleServicesItemsDesctop