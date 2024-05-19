import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

function CarouselRightBtn({ toggleSelectRight }) {
    return (
        <button onClick={toggleSelectRight} className='absolute z-10 sm:top-1/3 top-1/4 right-0 md:text-3xl sm:text-2xl text-xl border rounded sm:px-2 px-1 sm:py-4 py-2 hover:text-yellow-500 duration-200'>
            <FaAngleRight className='relative z-20' />
            <div className="absolute top-0 left-0 z-10 w-full h-full bg-black rounded opacity-50"></div>
        </button>
    )
}

export default CarouselRightBtn