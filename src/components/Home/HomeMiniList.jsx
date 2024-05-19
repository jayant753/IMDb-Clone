import React from 'react'
import { Link } from 'react-router-dom';
import HomeMiniCard from './HomeMiniCard';
import { FaAngleRight } from "react-icons/fa6";

function HomeMiniList({ movies, nextUp }) {
    return (
        <div className='xl:px-0 sm:px-8 px-3 flex flex-col sm:gap-5 gap-2 xl:w-[400px]'>
            <h1 className='font-bold md:text-xl sm:text-lg text-md text-yellow-500'>Up next</h1>
            <div className="w-full h-full _trailerRightgradient p-4 pb-0">
                <div className='grid lg:grid-cols-3 gap-6 xl:block '>
                    {nextUp.map(item => (
                        <HomeMiniCard key={item} item={item} movies={movies} />
                    ))}
                </div>
            </div>
            <button className="flex items-end gap-1 hover:text-yellow-500 w-fit">
                <Link to="/movies">
                    <h1 className='font-bold md:text-xl text-lg'>Browse Movies</h1>
                </Link>
                <FaAngleRight className='pb-1 text-lg' />
            </button>


        </div>
    )
}

export default HomeMiniList;