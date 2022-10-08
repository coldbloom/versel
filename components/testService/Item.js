import React, {useState} from "react";

const  Item = ({item, papaFunc, activeId}) => {
    const click= () => {
        papaFunc({
            id: item.id,
            content: item.content,
        });
    }
    return(
        <button onClick={click} className={`border-t-4 border border-gray-300 py-4 w-full lg:px-2 flex justify-center text-white ${activeId === item.id ? "bg-red-700 border-t-red-900 border-x-red-900 border-b-0 first:border-l-gray-300 last:border-r-gray-300 transition-colors " : "transition-colors"}`}>
            {item.name}
        </button>
    )
}

export default Item