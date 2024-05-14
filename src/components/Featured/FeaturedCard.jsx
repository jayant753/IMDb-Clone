import React, { useState } from 'react'
import { allFeatured } from '../../utils/constants'
import { IoListSharp } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";

function FeaturedCard({ FeaturedShow }) {
    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => { setHoverIndex(index); };
    const handleMouseLeave = () => { setHoverIndex(null); };

    return (
        <div className=' flex justify-evenly'>{
            FeaturedShow.map(index => (
                <div key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className="flex flex-col gap-2 w-[400px]">
                    <div className="relative overflow-hidden">
                        <img src={allFeatured[index].image} className='w-[400px]' alt="" />
                        {allFeatured[index].icon == "photos" &&
                            <button className='absolute flex gap-2 z-10 bottom-3 left-3 text-3xl'>
                                <IoMdPhotos className={`${hoverIndex == index ? "text-yellow-500" : ""} duration-200`} />
                                <h1 className='text-base font-semibold'>Photos</h1>
                            </button>
                        }
                        {allFeatured[index].icon == "list" &&
                            <button className='absolute flex gap-2 z-10 bottom-3 left-3 text-2xl '>
                                <IoListSharp className={`${hoverIndex == index ? "text-yellow-500" : ""} duration-200`} />
                                <h1 className='text-base font-semibold'>list</h1>
                            </button>
                        }
                        <div className="absolute -bottom-2 z-9 _trailerLeftgradient w-full h-20"></div>
                    </div>
                    <h2 className='font-medium line-clamp-2 hover:underline'>{allFeatured[index].title}</h2>
                    <h2 className='text-blue-500 font-medium hover:underline'>{allFeatured[index].description}</h2>
                </div>
            ))
        }</div>
    )
}

export default FeaturedCard