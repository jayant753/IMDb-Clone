import React, { useState } from 'react'
import { imagePath } from '../../utils/constants';
import { Link } from 'react-router-dom';


function MovieCard({ movieData }) {
    const [hover, setHover] = useState(null);

    const handleMouseEnter = (index) => { setHover(index); };
    const handleMouseLeave = (index) => { setHover(null); };

    return (
        <Link to={`/details/${movieData.id}`} className='col'>
            <div key={movieData.id} className="flex flex-col  md:w-[200px] sm:w-[160px] w-[140px] my-3 ">
                <div className="relative cursor-pointer"
                    onMouseEnter={() => handleMouseEnter(movieData.id)}
                    onMouseLeave={() => handleMouseLeave()}
                >
                    <img src={imagePath + movieData.poster_path} className='object-cover' alt="" />
                    <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center">
                    </div>
                    <div className={`absolute bg-black top-0 left-0 w-full h-full ${hover == movieData.id ? `opacity-10` : `opacity-0`} duration-200`}></div>
                    <div className="absolute -bottom-10 w-full h-28 _trailerLeftgradient"></div>
                </div>
                <div className="z-10 flex flex-col items-stretch gap-1 md:h-[120px] h-[100px] justify-between bg-[#222] p-2">
                    <div className="cursor-pointer">
                        <h1 className='md:text-[15px] text-sm text-zinc-300 line-clamp-1'> votes: {movieData.vote_count}</h1>
                        <h1 className='text-left md:text-[17px] text-md font-semibold line-clamp-2 w-fit hover:underline'>{movieData.title}</h1>
                    </div>
                    <h2 className='italic text-zinc-300 md:text-[14px] text-sm'>{movieData.release_date}</h2>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard