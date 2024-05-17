import React, { useEffect, useState } from 'react'
import WatchTrailerLeft from './WatchTrailerLeft'
import WatchTrailerRight from './WatchTrailerRight'
import CarouselLeftBtn from '../button/CarouselLeftBtn';
import CarouselRightBtn from '../button/CarouselRightBtn';
import { baseApi } from '../../api/axiosInstance';



const WatchTrailer = () => {
    const [selected, setSelected] = useState(0);
    const [nextUp, setNextUp] = useState([]);
    const [movies, setMovies] = useState([])

    const fetchToprated = async () => {
        try {
            const response = await baseApi.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1")
            setMovies(response.data.results)
        } catch {
            err => console.log(err)
        }
    }

    useEffect(() => {
        fetchToprated()
    }, [])

    const toggleSelectLeft = () => {
        setSelected((selected - 1 + movies.length) % movies.length);
    }
    const toggleSelectRight = () => {
        setSelected((selected + 1) % movies.length);

    }

    useEffect(() => {
        if (movies.length) {
            const nextIndex1 = (selected + 1) % movies.length;
            const nextIndex2 = (selected + 2) % movies.length;
            const nextIndex3 = (selected + 3) % movies.length;
            setNextUp([nextIndex1, nextIndex2, nextIndex3])
        }
    }, [selected, movies])

    return (
        <>
            <div className="flex gap-4">
                <div className="relative">
                    <CarouselLeftBtn toggleSelectLeft={toggleSelectLeft} />
                    {
                        movies.length &&
                        <WatchTrailerLeft movies={movies} selected={selected} className="w-fit" />
                    }
                    <CarouselRightBtn toggleSelectRight={toggleSelectRight} />

                </div>
                {movies.length &&
                    <WatchTrailerRight movies={movies} nextUp={nextUp} className="" />
                }
            </div>
        </>

    )
}

export default WatchTrailer;
