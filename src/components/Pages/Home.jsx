import React from 'react'
import WatchTrailer from '../WatchTrailer/WatchTrailer'
import Featured from '../Featured/Featured'

function Home() {
    return (
        <div className='w-[85%] mx-auto'>
            <WatchTrailer />
            <Featured />
        </div>
    )
}

export default Home