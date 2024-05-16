import React from 'react'
import { Link } from 'react-router-dom';
import { trailer } from '../../utils/constants';
import WatchTrailercard from './WatchTrailerCard';
import { FaAngleRight } from "react-icons/fa6";

function TrailerRight({ nextUp }) {
    return (
        <div className='flex flex-col gap-5 w-[400px]'>
            <h1 className='font-bold text-xl text-yellow-500'>Up next</h1>
            <div className="w-full h-full _trailerRightgradient p-4 pb-0">
                <WatchTrailercard nextUp={nextUp} />
            </div>
            <button className="flex items-end gap-1 hover:text-yellow-500 w-fit">
                <Link to="/movies">
                    <h1 className='font-bold text-xl'>Browse trailers </h1>
                </Link>
                <FaAngleRight className='pb-1 text-lg' />
            </button>


        </div>
    )
}

export default TrailerRight;