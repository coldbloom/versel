import React from 'react';
import style from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <div className='px-3 py-14 flex flex-col text-center'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-7xl'>404</h1>
            <p className='font-normal text-lg md:text-xl lg:text-2xl xl:text-3xl'>Такой страницы у нас нет (</p>
        </div>
    );
};

export default NotFoundPage;