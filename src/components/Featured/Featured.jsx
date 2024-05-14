import React, { useEffect, useState } from 'react'
import { allFeatured } from '../../utils/constants'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import FeaturedCard from './FeaturedCard';
import CarouselRightBtn from '../button/CarouselRightBtn';
import CarouselLeftBtn from '../button/CarouselLeftBtn';

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
            <div className="relative mt-4 w-[840px] h-[300px] ">
                {!FeaturedShow.includes(0) &&
                    <CarouselLeftBtn toggleSelectLeft={toggleSelectLeft} />
                }
                <FeaturedCard FeaturedShow={FeaturedShow} />
                {!FeaturedShow.includes(allFeatured.length - 1) &&
                    <CarouselRightBtn toggleSelectRight={toggleSelectRight} />
                }
            </div>
        </div>
    )
}

export default Featured