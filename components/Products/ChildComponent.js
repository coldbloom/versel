import React from "react";
import {AiOutlineRight} from "react-icons/ai";
import Link from "next/link";

const ChildComponent = ({name, clas}) => {
    return(
        <div className={`border-red-800 rounded bg-red-700 w-full ${clas}`}>
            <Link href="/" passHref>
                <div className='pl-4 pr-4 md:pr-2.5 py-2 flex flex-row items-center justify-between'>
                    <div className='font-bold text-lg'>{name}</div>
                    <AiOutlineRight size={20}/>
                </div>
            </Link>
        </div>
    )
}

export default ChildComponent