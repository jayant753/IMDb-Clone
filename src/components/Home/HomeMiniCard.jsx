import React, { useState } from 'react';
import { AiOutlineLike } from "react-icons/ai";
import { imagePath } from '../../utils/constants';
import { Link } from 'react-router-dom';

function WatchTrailercard({ movies, nextUp }) {
    const [hover, setHover] = useState(null);

    const handleMouseEnter = (index) => { setHover(index); };
    const handleMouseLeave = (index) => { setHover(null); };

    return (
        <div className=' flex flex-col gap-5'>
            {nextUp.map(item => (
                <Link to={`/details/${movies[item].id}`} key={item}>
                    <div className="flex gap-4">
                        <img src={imagePath + movies[item].poster_path} className='w-[90px]' alt="" />
                        <div className="flex flex-col justify-between w-full cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(item)}
                            onMouseLeave={() => handleMouseLeave()}>
                            <div className='flex items-end gap-2'>
                            </div>
                            <div className='flex flex-col leading-5'>
                                <h1>{movies[item].title}</h1>
                                <h1 className='text-md text-zinc-400 line-clamp-3'>{movies[item].overview}</h1>
                            </div>
                            <div className='flex gap-3 items-center text-zinc-400'>
                                <div className="flex items-center gap-1">
                                    <AiOutlineLike className='text-lg' />
                                    <h1>{movies[item].vote_count}</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default WatchTrailercard