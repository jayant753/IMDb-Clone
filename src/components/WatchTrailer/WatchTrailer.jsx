import React, { useEffect, useState } from 'react'
import WatchTrailerLeft from './WatchTrailerLeft'
import WatchTrailerRight from './WatchTrailerRight'
import { trailer } from '../../utils/constants';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const WatchTrailer = () => {
    const [selected, setSelected] = useState(0);
    const [nextUp, setNextUp] = useState([]);

    const toggleSelectLeft = () => {
        setSelected((selected - 1 + trailer.length) % trailer.length);
        console.log("left")
    }
    const toggleSelectRight = () => {
        setSelected((selected + 1) % trailer.length);

    }

    useEffect(() => {
        const nextIndex1 = (selected + 1) % trailer.length;
        const nextIndex2 = (selected + 2) % trailer.length;
        const nextIndex3 = (selected + 3) % trailer.length;
        setNextUp([nextIndex1, nextIndex2, nextIndex3])
    }, [selected])


    return (
        <>
            <div className="flex gap-4 pt-28">
                <div className="relative">
                    <button onClick={toggleSelectLeft} className='absolute z-10 top-1/3 left-0 text-3xl border rounded px-2 py-4 hover:text-yellow-500 duration-200'>
                        <FaAngleLeft className='relative z-20' />
                        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black rounded opacity-50"></div>
                    </button>
                    <WatchTrailerLeft selected={selected} className="w-fit" />
                    <button onClick={toggleSelectRight} className='absolute z-10 top-1/3 right-0 text-3xl border rounded px-2 py-4 hover:text-yellow-500 duration-200'>
                        <FaAngleRight className='relative z-20' />
                        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black rounded opacity-50"></div>
                    </button>

                </div>
                <WatchTrailerRight nextUp={nextUp} className="" />
            </div>
        </>

    )
}

export default WatchTrailer;
