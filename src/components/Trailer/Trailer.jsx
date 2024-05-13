import React from 'react'
import TrailerLeft from './TrailerLeft'
import TrailerRight from './TrailerRight'

const Trailer = () => {
    return (
        <>
            <div className="flex w-[85%] mx-auto">
                <TrailerLeft className="w-fit" />
                <TrailerRight className="" />
            </div>
        </>

    )
}

export default Trailer;
