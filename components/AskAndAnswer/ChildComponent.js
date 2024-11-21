import React, {useState, useRef} from 'react'
import {FiChevronRight} from 'react-icons/fi'
import s from './AskAndAnswer.module.css'
import cn from 'classnames'


const ChildComponent = ({data}) => {
    const accordion = useRef(null);
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState('0px')

    const openAnswer = () => {
        setOpen(!open)
        if (open === true) {
            setHeight('0px')
        } else {
            setHeight(`${accordion.current.scrollHeight}px`)
        }
    }
    return (
        <div className={cn('border rounded mt-3 ', s.color)}>
            <button
                className={open
                    ? cn('flex flex-row items-center py-4 md:px-4 px-1 w-full rounded justify-center', s.button, s.button__active)
                    : cn('flex flex-row items-center py-4 md:px-4 px-1 w-full justify-center', s.button)
                }
                onClick={openAnswer}>
                <h3>{data.question}</h3>
                <div>
                    <FiChevronRight size={22} className={open ? cn(s.rotate, s.transition) : s.transition}/>
                </div>
            </button>
            <div className={cn(s.accordion, 'px-4')} ref={accordion} style={{maxHeight: height}}>
                <div className='pt-1'/>
                {data.answer}
                <div className='pt-1'/>
            </div>
        </div>
    )
}

export default ChildComponent