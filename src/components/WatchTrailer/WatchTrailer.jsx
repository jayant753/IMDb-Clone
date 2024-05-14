import React, { useEffect, useState } from 'react'
import WatchTrailerLeft from './WatchTrailerLeft'
import WatchTrailerRight from './WatchTrailerRight'
import { trailer } from '../../utils/constants';
import CarouselLeftBtn from '../button/CarouselLeftBtn';
import CarouselRightBtn from '../button/CarouselRightBtn';


const WatchTrailer = () => {
    const [selected, setSelected] = useState(0);
    const [nextUp, setNextUp] = useState([]);

    const toggleSelectLeft = () => {
        setSelected((selected - 1 + trailer.length) % trailer.length);
        console.log("left")
    }
    const toggleSelectRight = () => {
        setSelected((selected + 1) % trailer.length);

    }

    useEffect(() => {
        const nextIndex1 = (selected + 1) % trailer.length;
        const nextIndex2 = (selected + 2) % trailer.length;
        const nextIndex3 = (selected + 3) % trailer.length;
        setNextUp([nextIndex1, nextIndex2, nextIndex3])
    }, [selected])


    return (
        <>
            <div className="flex gap-4 pt-28">
                <div className="relative">
                    <CarouselLeftBtn toggleSelectLeft={toggleSelectLeft} />
                    <WatchTrailerLeft selected={selected} className="w-fit" />
                    <CarouselRightBtn toggleSelectRight={toggleSelectRight} />

                </div>
                <WatchTrailerRight nextUp={nextUp} className="" />
            </div>
        </>

    )
}

export default WatchTrailer;
