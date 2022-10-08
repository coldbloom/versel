import React, {useRef, useState} from 'react'
import cn from "classnames";
import s from "../AskAndAnswer/AskAndAnswer.module.css";
import {FiChevronRight} from "react-icons/fi";
import {AiOutlineRight} from "react-icons/ai";
import Link from 'next/link'

const ChildComponent = ({name, data}) => {

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

    return(
        <div className={cn('border-b')}>
            <button
                className={open
                    ? cn('flex flex-row items-center py-4 w-full justify-center', s.button)
                    : cn('flex flex-row items-center py-4 w-full justify-center', s.button)
                }
                onClick={openAnswer}>
                <h3 className='pl-2'>{name}</h3>
                <div>
                    <FiChevronRight size={22} className={open ? cn(s.rotate, s.transition) : s.transition}/>
                </div>
            </button>
            <div className={cn(s.accordion)} ref={accordion} style={{maxHeight: height}}>
                <div className={cn('text-black text-lg px-4 py-1', s.bgc)}>
                    {data.map((item) =>(
                        <div key={item.id} className='flex flex-row items-center pb-1'>
                            <Link href='/'>{item.name}</Link>
                            <FiChevronRight size={20} className="ml-1"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ChildComponent