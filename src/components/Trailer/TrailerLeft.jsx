import React from 'react'
import { trailer } from '../../utils/constants';
import { GoPlay } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { CgHeart } from "react-icons/cg";

function TailerLeft() {
    return (
        <div className="relative pb-16">
            <div className="relative">
                <img src={trailer[0].bgImage} className="w-[850px]" alt="" />
                <div className="absolute _trailergradient bottom-0 w-full h-36"></div>
            </div>
            <div className="absolute bottom-0 flex gap-4 items-end px-4">
                <img src={trailer[0].image} className='w-[160px]' alt="" />
                <GoPlay className="text-white w-20 h-20 mb-6" />
                <div className="flex flex-col gap-1">
                    <div className="flex items-end gap-8">
                        <h1 className='text-4xl text-white'>{trailer[0].title}</h1>
                        <h1 className='text-xl text-zinc-400'>{trailer[0].duration}</h1>
                    </div>
                    <h2 className='text-2xl text-zinc-400'>{trailer[0].description}</h2>
                    <div className='flex gap-3 items-center text-zinc-400'>
                        <div className="flex items-center gap-1">
                            <AiOutlineLike className='text-lg' />
                            <h1>{trailer[0].likes}</h1>
                        </div>
                        <div className="flex items-center gap-1">
                            <CgHeart className='text-lg' />
                            <h1>{trailer[0].hearts}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TailerLeft