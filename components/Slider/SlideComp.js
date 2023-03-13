import React from 'react';
import styles from "./RitualSlider.module.css";

const SlideComp = ({data}) => {
    return (
        <div className='pb-10 px-10 sm:px-0'>
            <div className='mx-1 bg-white h-full px-4 pt-4 pb-2 border rounded shadow-xl max-h-80 overflow-y-auto'>
                <div className='flex justify-between'>
                    <div className='text-blue-900 opacity-70'>
                        {data.name}
                        {data.num}
                    </div>
                    <div className='italic text-blue-900 opacity-70'>
                        {data.date}
                    </div>
                </div>
                <div className='pt-2 pb-2'>
                    <p className={styles.text}>
                        {data.text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SlideComp;