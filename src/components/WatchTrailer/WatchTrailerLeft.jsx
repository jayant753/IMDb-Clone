import React, { useState } from 'react'
import { trailer } from '../../utils/constants';
import { GoPlay } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { CgHeart } from "react-icons/cg";

function TailerLeft({ selected }) {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => { setHover(true); };
    const handleMouseLeave = () => { setHover(false); };

    return (
        <div className="relative pb-16"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="relative cursor-pointer">
                <img src={trailer[selected].bgImage} className="w-[850px]" alt="" />
                <div className={`absolute bg-black top-0 left-0 w-full h-full ${hover ? `opacity-10` : `opacity-0`} duration-200`}></div>
                <div className="absolute _trailerLeftgradient bottom-0 w-full h-36"></div>
            </div>
            <div className="absolute bottom-0 flex gap-4 items-end px-4  cursor-pointer">
                <img src={trailer[selected].image} className='w-[160px]' alt="" />
                <GoPlay className={`w-20 h-20 mb-6 ${hover ? `text-yellow-500` : `text-white`} duration-200`} />
                <div className="flex flex-col gap-1">
                    <div className="flex items-end gap-8">
                        <h1 className='text-4xl text-white'>{trailer[selected].title}</h1>
                        <h1 className='text-xl text-zinc-400'>{trailer[selected].duration}</h1>
                    </div>
                    <h2 className='text-2xl text-zinc-400'>{trailer[selected].description}</h2>
                    <div className='flex gap-3 items-center text-zinc-400'>
                        <div className="flex items-center gap-1">
                            <AiOutlineLike className='text-lg' />
                            <h1>{trailer[selected].likes}</h1>
                        </div>
                        <div className="flex items-center gap-1">
                            <CgHeart className='text-lg' />
                            <h1>{trailer[selected].hearts}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TailerLeft