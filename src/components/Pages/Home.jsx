import React from 'react'
import HomeSlider from '../Home/HomeSlider'
import Featured from '../Featured/Featured'

function Home() {
    return (
        <div className='w-[85%] mx-auto'>
            <HomeSlider />
            <Featured />
        </div>
    )
}

export default Home