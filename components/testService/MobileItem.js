import React from "react";
import Link from "next/link";

const MobileItem = ({item, papaFunc}) => {
    const click = () => {
        papaFunc({
            id: item.id,
            content: item.content,
        })
    }

    return(
        <div
            onClick={click}
            className='bg-red-700 my-2 mx-4 rounded flex flex-row justify-center items-center'
        >
            <p className='flex text-center text-white font-normal p-2 text-lg'>
                <Link href={item.url}>
                    {item.name}
                </Link>
            </p>
        </div>
    )
}

export default MobileItem