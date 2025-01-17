import { useEffect, useState } from 'react'
import HomeMainCard from './HomeMainCard'
import HomeMiniList from './HomeMiniList'
import CarouselLeftBtn from '../button/CarouselLeftBtn';
import CarouselRightBtn from '../button/CarouselRightBtn';
import { baseApi } from '../../api/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { addMoviesPages } from '../../utils/redux/moviesPagesSlice';
import { addTopRatedMovies } from '../../utils/redux/topRatedMoviesSlice';
import { Link } from 'react-router-dom';



const HomeSlider = () => {
    // const topRatedMoviesPageCount = useSelector(store => store.moviesPages.items[0].topRatedPages)
    const movies = useSelector(store => store.topRatedMovies.items)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState(0);
    const [nextUp, setNextUp] = useState([]);

    const fetchToprated = async () => {
        try {
            const response = await baseApi.get(`/3/movie/top_rated?language=en-US&page=1`);
            dispatch(addTopRatedMovies(response.data.results))
            dispatch(addMoviesPages("topRatedPages"))

        } catch {
            err => console.log(err)
        }
    }

    useEffect(() => {
        if (movies.length == 0) {
            fetchToprated()
            dispatch(addMoviesPages("topRatedPages"))
        }
    }, [movies])

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
            <div className="flex flex-col xl:flex-row gap-4 justify-between">
                <div className="relative w-fit">
                    <CarouselLeftBtn toggleSelectLeft={toggleSelectLeft} />
                    {
                        movies.length &&
                        <Link to={`/details/${movies[selected].id}`}>
                            <HomeMainCard movies={movies} selected={selected} className="w-fit" />
                        </Link>
                    }
                    <CarouselRightBtn toggleSelectRight={toggleSelectRight} />

                </div>
                {movies.length &&
                    <HomeMiniList movies={movies} nextUp={nextUp} className="" />
                }
            </div>
        </>

    )
}

export default HomeSlider;
