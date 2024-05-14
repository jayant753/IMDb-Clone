import React, { useState } from 'react'
import { trailersPageBtns } from '../../utils/constants'
import TrailersCard from '../Trailer/TrailersCard'

function Trailers() {
    const [filter, setFilter] = useState(0)

    const toggleSelection = (ind) => { setFilter(ind) }
    return (

        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl text-yellow-500 font-bold px-3'>Watch New Movie & TV Trailers</h1>
            <div className="flex mt-8">
                {trailersPageBtns.map((item, ind) => (
                    <div className='flex flex-col  items-center'>
                        <button
                            key={ind}
                            onClick={() => toggleSelection(ind)}
                            className={`text-base font-semibold text-center px-6 py-4 hover:bg-[#121212] ${filter == ind ? "" : ""}`}>
                            {item}</button>
                        <div className={` h-0.5 bg-blue-500 ${filter == ind ? "w-full" : "w-0"} duration-200`}></div>
                    </div>
                ))}
            </div>
            <TrailersCard />
        </div>
    )
}

export default Trailers