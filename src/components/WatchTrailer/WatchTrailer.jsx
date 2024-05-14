import React, { useEffect, useState } from 'react'
import WatchTrailerLeft from './WatchTrailerLeft'
import WatchTrailerRight from './WatchTrailerRight'
import { trailer } from '../../utils/constants';
import CaroselLeftBtn from '../button/CaroselLeftBtn';
import CaroselRightBtn from '../button/CaroselRightBtn';


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
                    <CaroselLeftBtn toggleSelectLeft={toggleSelectLeft} />
                    <WatchTrailerLeft selected={selected} className="w-fit" />
                    <CaroselRightBtn toggleSelectRight={toggleSelectRight} />

                </div>
                <WatchTrailerRight nextUp={nextUp} className="" />
            </div>
        </>

    )
}

export default WatchTrailer;
