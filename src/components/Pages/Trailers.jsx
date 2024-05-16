import React, { useEffect, useState } from 'react'
import { imagePath, trailersPageBtns } from '../../utils/constants'
import TrailersCard from '../Trailer/TrailersCard'

function Trailers() {
    const [filter, setFilter] = useState(0)
    const [trending, setTrending] = useState([])
    const [hover, setHover] = useState(null);

    const handleMouseEnter = (index) => { setHover(index); };
    const handleMouseLeave = (index) => { setHover(null); };

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWNjZDRjMmI3NWE3ZDUwYzA0ZGY3ZjllZmQ2NTM0YiIsInN1YiI6IjY2NDM2MDgwYjFmM2EzMTUzYTk2MTk3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mkfD8ifzogqSAsgdKqSrcBMcXq-b__ZYkeZ4OhOheYs'
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=2', options)
            .then(response => response.json())
            .then(response => {
                setTrending(response.results);
                console.log(response.results);
            })
            .catch(err => console.error(err));
    }, [])


    const toggleSelection = (ind) => { setFilter(ind) }

    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl text-yellow-500 font-bold px-3'>Explore Movies</h1>
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

            <div className='mt-8 w-full '>
                <div className="grid grid-cols-6 justify-items-center">

                    {trending.length &&
                        trending.map(data => (
                            <div key={data.id} className="flex flex-col w-[190px] mt-8 ">
                                <div className="relative cursor-pointer"
                                    onMouseEnter={() => handleMouseEnter(data.id)}
                                    onMouseLeave={() => handleMouseLeave()}
                                >
                                    <img src={imagePath + data.poster_path} className='w-[190px]' alt="" />
                                    <div className="absolute z-10 bottom-2 left-2 flex gap-2 items-center">
                                        {/* <GoPlay className={` text-4xl ${hover == data.id ? `text-yellow-500` : ``} duration-200`} /> */}
                                        {/* <p className='text-sm font-semibold'>{data.duration}</p> */}
                                    </div>
                                    <div className={`absolute bg-black top-0 left-0 w-full h-full ${hover == data.id ? `opacity-10` : `opacity-0`} duration-200`}></div>
                                    <div className="absolute -bottom-10 w-full h-28 _trailerLeftgradient"></div>
                                </div>
                                <div className="z-10 flex flex-col items-stretch gap-1 h-[120px] justify-between bg-[#222] p-2">
                                    <div className="cursor-pointer">
                                        <h1 className='text-[15px] text-zinc-300 line-clamp-1'> votes: {data.vote_count}</h1>
                                        <h1 className='text-left text-[17px] font-semibold line-clamp-2 w-fit hover:underline'>{data.title}</h1>
                                    </div>
                                    <h2 className='italic text-zinc-300 text-[14px]'>{data.release_date}</h2>
                                </div>
                            </div>
                        ))
                    }

                    {/* <TrailersCard /> */}
                </div>
            </div>
        </div>
    )
}

export default Trailers