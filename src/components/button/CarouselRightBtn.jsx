import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function CarouselRightBtn({ toggleSelectRight }) {
    return (
        <button onClick={toggleSelectRight} className='absolute z-10 top-1/3 right-0 text-3xl border rounded px-2 py-4 hover:text-yellow-500 duration-200'>
            <FaAngleRight className='relative z-20' />
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-black rounded opacity-50"></div>
        </button>
    )
}

export default CarouselRightBtn