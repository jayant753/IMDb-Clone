import React, { useEffect, useState } from 'react'
import { imagePath } from '../../utils/constants'
import { useParams } from 'react-router-dom'
import { baseApi } from '../../api/axiosInstance'

function MovieDetails() {
    const params = useParams()
    const [details, setDetails] = useState({})

    const fetchDetails = async () => {
        try {
            const response = await baseApi.get(`/3/movie/${params.id}?language=en-US`)
            setDetails(response.data)
        } catch {
            err => console.log(err)
        }
    }

    useEffect(() => {
        fetchDetails()
    }, [])

    return (<>

        <div className='relative -mt-9  h-fit w-full'>
            <div className="relative ">
                <img src={imagePath + details?.backdrop_path} className='opacity-40' alt="" />
                <div className="absolute bottom-0 w-full h-full _trailerLeftgradient"></div>
            </div>
            <div className="absolute top-0 w-full  pb-[100px]">
                <div className="flex gap-16 w-[80%] mx-auto mt-[500px]">
                    <img src={imagePath + details?.poster_path} className='w-[350px] h-fit' alt="" />
                    <div className="">
                        <h1 className='text-5xl text-white'>{details?.original_title}
                            <span className=' mx-3 text-4xl'>
                                ({details?.release_date?.substring(0, 4)})
                            </span>
                        </h1>

                        <h2 className='mt-2 italic text-xl text-slate-300'>{details?.tagline}</h2>
                        <h2 className='mt-4 text-[22px] text-slate-300'>{details?.overview}</h2>
                        {details.genres && details?.genres.length && (
                            <h2 className='mt-4 italic text-xl text-zinc-300'>
                                Genres: {details?.genres?.map(genre => genre.name).join(", ")}
                            </h2>)
                        }
                        <h2 className='mt-4 italic text-xl text-zinc-300'>Original language : {details?.spoken_languages?.[0]?.name}</h2>
                        <h2 className='mt-4 italic text-xl text-zinc-300'>Released Date : {details?.release_date}</h2>
                    </div>
                </div>
            </div>

        </div >
    </>
    )
}

export default MovieDetails