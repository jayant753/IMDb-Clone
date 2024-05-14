import React, { useEffect, useState } from 'react'
import { allFeatured } from '../../utils/constants'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import FeaturedCard from './FeaturedCard';

function Featured() {
    const [FeaturedShow, setFeaturedShow] = useState([0, 1])

    const toggleSelectLeft = () => {
        const ind1 = (FeaturedShow[0] - 2 + allFeatured.length) % allFeatured.length;
        const ind2 = (FeaturedShow[1] - 2 + allFeatured.length) % allFeatured.length;
        setFeaturedShow([ind1, ind2]);
    };

    const toggleSelectRight = () => {
        const ind1 = (FeaturedShow[0] + 2) % allFeatured.length;
        const ind2 = (FeaturedShow[1] + 2) % allFeatured.length;
        setFeaturedShow([ind1, ind2]);
    };

    return (
        <div className='mt-6 px-2'>
            <h1 className='text-3xl text-yellow-500 font-bold px-3'>Featured today</h1>
            <div className="relative mt-4 w-[840px]">
                {!FeaturedShow.includes(0) && <button onClick={toggleSelectLeft} className='absolute z-10 top-1/4 left-0 text-3xl border rounded px-2 py-4 hover:text-yellow-500 duration-200'>
                    <FaAngleLeft className='relative z-20' />
                    <div className="absolute top-0 left-0 z-10 w-full h-full bg-black rounded opacity-50"></div>
                </button>}
                <FeaturedCard FeaturedShow={FeaturedShow} />
                {!FeaturedShow.includes(allFeatured.length - 1) &&
                    <button onClick={toggleSelectRight} className='absolute top-1/4 right-0 text-3xl border rounded px-2 py-4 hover:text-yellow-500 duration-200'>
                        <FaAngleRight className='relative z-20' />
                        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black rounded opacity-50"></div>
                    </button>
                }
            </div>
        </div>
    )
}

export default Featured