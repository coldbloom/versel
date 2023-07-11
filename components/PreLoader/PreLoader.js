import React from 'react';
import style from './PreLoader.module.css'
const PreLoader = () => {
    return (
        <div className={style.loaderContainer}>
            <div className={style.spinner}></div>
        </div>
    );
};

export default PreLoader;