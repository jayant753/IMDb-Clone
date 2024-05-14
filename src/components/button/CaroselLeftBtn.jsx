import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";


function CaroselLeftBtn({ toggleSelectLeft }) {
    return (
        <button onClick={toggleSelectLeft} className='absolute z-10 top-1/3 left-0 text-3xl border rounded px-2 py-4 hover:text-yellow-500 duration-200'>
            <FaAngleLeft className='relative z-20' />
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-black rounded opacity-50"></div>
        </button>
    )
}

export default CaroselLeftBtn