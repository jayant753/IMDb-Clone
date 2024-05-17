import React, { useEffect, useState } from 'react'
import { moviePageBtns } from '../../utils/constants'
import MovieCard from '../Movies/MovieCard'
import { useSelector, useDispatch } from 'react-redux'
import { baseApi } from '../../api/axiosInstance'

function ExploreMoviePage() {
    const moviesPages = useSelector(store => store.moviesPages.items[0])
    const upcoming = useSelector(store => store.upcomingMovies.items)
    const nowPlaying = useSelector(store => store.nowPlayingMovies.items)
    const popular = useSelector(store => store.popularMovies.items)
    const topRated = useSelector(store => store.topRatedMovies.items)
    const dispatch = useDispatch();

    const [filter, setFilter] = useState(moviePageBtns[0].value)
    const [pages, setPages] = useState({
        upcomingPage: 0,
        nowPlayingPage: 0,
        popularPage: 0,
        topRatedPage: 0
    })

    const toggleSelection = (id) => { setFilter(moviePageBtns[id - 1].value) }

    useEffect(() => {
        if (moviesPages[filter + "Pages"] == 0) {
            const btn = moviePageBtns.filter(item => item.value == filter)
            const { value, path, addMovies, addPages } = btn[0]
            fetchMovies(filter, path, 1, addMovies, addPages);

        }
    }, [filter])

    const fetchMovies = async (filter, path, page, addMovies, addPages) => {
        try {
            const movies = await baseApi.get(`/3/movie/${path}?language=en-US&page=${page}`);
            dispatch(addMovies(movies.data.results));
            dispatch(addPages(filter + "Pages"))
        } catch (error) {
            console.error("Error in fetching movies", error);
        }
    }

    const loadMoreMovies = () => {
        const btn = moviePageBtns.filter(item => item.value == filter)
        const { value, path, addMovies, addPages } = btn[0]
        const page = moviesPages[filter + "Pages"] + 1;
        fetchMovies(filter, path, page, addMovies, addPages);
    }

    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='text-3xl text-yellow-500 font-bold px-3'>Explore Movies</h1>
            <div className="flex mt-8">
                {moviePageBtns.map((item) => (
                    <div key={item.id} className='flex flex-col  items-center'>
                        <button
                            onClick={() => toggleSelection(item.id)}
                            className={`text-base font-semibold text-center px-6 py-4 hover:bg-[#121212] ${filter == item.id ? "" : ""}`}>

                            {item.btn}</button>
                        <div className={` h-0.5 bg-blue-500 ${filter == item.value ? "w-full" : "w-0"} duration-200`}></div>
                    </div>
                ))}
            </div>

            {/* render movies list according to the selected filters */}
            <div className='mt-8 w-full '>
                <div className="grid grid-cols-5 justify-items-center">
                    {filter == "nowPlaying" &&
                        nowPlaying.map(data => (
                            <MovieCard key={data.id} movieData={data} />
                        ))
                    }
                    {filter == "popular" &&
                        popular.map(data => (
                            <MovieCard key={data.id} movieData={data} />
                        ))
                    }
                    {filter == "topRated" &&
                        topRated.map(data => (
                            <MovieCard key={data.id} movieData={data} />
                        ))
                    }
                    {filter == "upcoming" &&
                        upcoming.map(data => (
                            <MovieCard key={data.id} movieData={data} />
                        ))
                    }

                </div>
            </div>


            <div className="flex justify-center mt-12">
                <button onClick={loadMoreMovies}
                    className='text-xl font-medium text-center px-6 py-2 bg-black border border-yellow-500 hover:bg-yellow-500 hover:text-black duration-150 '>Load more...</button>
            </div>
        </div >
    )
}

export default ExploreMoviePage