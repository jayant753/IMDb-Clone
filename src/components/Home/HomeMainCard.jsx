import React, { useEffect, useState } from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { imagePath } from '../../utils/constants';

function HomeMainCard({ movies, selected }) {
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => { setHover(true); };
    const handleMouseLeave = () => { setHover(false); };

    return (
        <div className="relative pb-16 w-fit"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className="relative cursor-pointer ">
                <img src={imagePath + movies[selected].backdrop_path} className="xl:w-[850px] w-full min-h-[300px] object-cover " alt="" />
                <div className={`absolute bg-black top-0 left-0 w-full h-full ${hover ? `opacity-10` : `opacity-0`} duration-200`}></div>
                <div className="absolute _trailerLeftgradient bottom-0 w-full h-36"></div>
            </div>
            <div className="absolute bottom-0 sm:flex gap-4 items-end px-4  cursor-pointer mt-40">
                <img src={imagePath + movies[selected].poster_path} className='md:w-[160px] w-[120px]' alt="" />
                <div className="flex flex-col gap-1">
                    <div className="flex items-end gap-8">
                        <h1 className='lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white max-w-[450px]'>{movies[selected].original_title}</h1>
                    </div>
                    <h2 className='lg:text-xl md:text-lg text-md text-zinc-400 line-clamp-3'>{movies[selected].overview.substring(10)}</h2>
                    <div className='flex gap-3 items-center text-zinc-400'>
                        <div className="flex items-center gap-1">
                            <AiOutlineLike />
                            <h1 className='lg:text-lg md:text-md text-sm'>{movies[selected].vote_count}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeMainCard