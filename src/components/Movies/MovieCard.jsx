import React, { useState } from 'react'
import { trailersPageMovies } from '../../utils/constants'
import { GoPlay } from "react-icons/go";
import { imagePath } from '../../utils/constants';


function MovieCard({ movieData }) {
    const [hover, setHover] = useState(null);

    const handleMouseEnter = (index) => { setHover(index); };
    const handleMouseLeave = (index) => { setHover(null); };

    return (
        <div key={movieData.id} className="flex flex-col w-[220px] mt-8 ">
            <div className="relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter(movieData.id)}
                onMouseLeave={() => handleMouseLeave()}
            >
                <img src={imagePath + movieData.poster_path} className='w-[220px] aspect-[2/3]' alt="" />
                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center">
                    {/* <GoPlay className={` text-4xl ${hover == movieData.id ? `text-yellow-500` : ``} duration-200`} /> */}
                    {/* <p className='text-sm font-semibold'>{movieData.duration}</p> */}
                </div>
                <div className={`absolute bg-black top-0 left-0 w-full h-full ${hover == movieData.id ? `opacity-10` : `opacity-0`} duration-200`}></div>
                <div className="absolute -bottom-10 w-full h-28 _trailerLeftgradient"></div>
            </div>
            <div className="z-10 flex flex-col items-stretch gap-1 h-[120px] justify-between bg-[#222] p-2">
                <div className="cursor-pointer">
                    <h1 className='text-[15px] text-zinc-300 line-clamp-1'> votes: {movieData.vote_count}</h1>
                    <h1 className='text-left text-[17px] font-semibold line-clamp-2 w-fit hover:underline'>{movieData.title}</h1>
                </div>
                <h2 className='italic text-zinc-300 text-[14px]'>{movieData.release_date}</h2>
            </div>
        </div>
    )
}

export default MovieCard