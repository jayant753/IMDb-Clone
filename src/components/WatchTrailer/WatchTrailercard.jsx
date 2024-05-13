import React, { useState } from 'react';
import { GoPlay } from "react-icons/go";
import { trailer } from '../../utils/constants'
import { AiOutlineLike } from "react-icons/ai";
import { CgHeart } from "react-icons/cg";

function WatchTrailercard({ nextUp }) {
    const [hover, setHover] = useState(null);

    const handleMouseEnter = (index) => {
        setHover(index);
    };
    const handleMouseLeave = (index) => { setHover(null); };

    return (
        <div className=' flex flex-col gap-5'>
            {nextUp.map(item => (
                <div key={item} className="flex gap-4">
                    <img src={trailer[item].image} className='w-[90px]' alt="" />
                    <div className="flex flex-col gap-2 w-full cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={() => handleMouseLeave()}>
                        <div className='flex items-end gap-2'>
                            <GoPlay className={`text-4xl  ${hover == item ? `text-yellow-500` : `text-white`} duration-200`} />
                            <h1 className='text-sm font-semibold text-zinc-400'>{trailer[item].duration}</h1>
                        </div>
                        <div className='flex flex-col leading-5'>
                            <h1>{trailer[item].title}</h1>
                            <h1 className='text-md text-zinc-400 line-clamp-1'>{trailer[item].description}</h1>
                        </div>
                        <div className='flex gap-3 items-center text-zinc-400'>
                            <div className="flex items-center gap-1">
                                <AiOutlineLike className='text-lg' />
                                <h1>{trailer[item].likes}</h1>
                            </div>
                            <div className="flex items-center gap-1">
                                <CgHeart className='text-lg' />
                                <h1>{trailer[item].hearts}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WatchTrailercard