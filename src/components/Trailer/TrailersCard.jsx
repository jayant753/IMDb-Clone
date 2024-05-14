import React, { useState } from 'react'
import { trailersPageMovies } from '../../utils/constants'
import { GoPlay } from "react-icons/go";


function TrailersCard() {
    const [hover, setHover] = useState(null);

    const handleMouseEnter = (index) => { setHover(index); };
    const handleMouseLeave = (index) => { setHover(null); };

    return (
        <div className='mt-8 w-full'>
            <div className="grid grid-cols-6 justify-items-center">
                {
                    trailersPageMovies.map((data, index) => (
                        <div key={data.id} className="flex flex-col w-[190px] mt-8 ">
                            <div className="relative cursor-pointer"
                                onMouseEnter={() => handleMouseEnter(data.id)}
                                onMouseLeave={() => handleMouseLeave()}>
                                <img src={data.image} className='w-[190px]' alt="" />
                                <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center">
                                    <GoPlay className={` text-4xl ${hover == data.id ? `text-yellow-500` : ``} duration-200`} />
                                    <p className='text-sm font-semibold'>{data.duration}</p>
                                </div>
                                <div className={`absolute bg-black top-0 left-0 w-full h-full ${hover == data.id ? `opacity-10` : `opacity-0`} duration-200`}></div>
                                <div className="absolute -bottom-10 w-full h-28 _trailerLeftgradient"></div>
                            </div>
                            <div className="z-10 flex flex-col gap-1 h-[120px] bg-[#222] p-2">
                                <h1 className='text-[15px] text-zinc-300 line-clamp-1'>{data.description}</h1>
                                <button className='text-left text-[17px] font-semibold line-clamp-1 hover:underline'>{data.title}</button>
                                <h2 className='mt-6 italic text-zinc-300 text-[14px]'>{data.date}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TrailersCard