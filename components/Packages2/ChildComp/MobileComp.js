import React, {useState, useRef} from "react";
import UniverseComp from "./UniverseComp";
import toStr from './IntToStrFunc'
import s from '../../AskAndAnswer/AskAndAnswer.module.css'
import cn from 'classnames'

const MobileComp = ({item, compensation, priceNow}) => {

    const content = useRef(null);
    const [flag, setFlag] = useState(false);
    const [height, setHeight] = useState('0px');

    const handleClick = () => {
        setFlag(!flag)
        setHeight(
            flag === true ? '0px' : `${content.current.scrollHeight}px`
        )
    }

    return (
        <div className='mt-4'>
            <div className={flag
                ? 'flex row justify-between items-center bg-white rounded-t'
                : cn('flex row justify-between items-center bg-white rounded', s.transition__rounded)}>
                <h2 className={item.bold ? 'font-bold text-2xl text-gray-800 ml-4' : 'text-2xl text-gray-800 ml-4 font-medium'}
                    onClick={handleClick}
                >
                    {item.name}
                </h2>
                <div className='flex row text-2xl items-center'>
                    <div className={'block text-sky-900 font-bold'}>{toStr(priceNow[item.item])}</div>
                    <div className='w-10 h-10 bg-slate-200 rounded flex items-center justify-center my-4 mr-2 mr-5 ml-5'>
                        <div
                            className={flag ? cn(s.plusMinus, s.active) : cn(s.plusMinus, s.inActive)}
                            onClick={handleClick}
                        >
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={cn('bg-white px-4 overflow-hidden rounded-b', s.accordion)}
                ref={content}
                style={{maxHeight: height}}
            >
                <UniverseComp item={item}/>`
            </div>
        </div>
    )
}

export default MobileComp