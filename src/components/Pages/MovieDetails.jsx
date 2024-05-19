import React, { useEffect, useState } from 'react'
import { imagePath } from '../../utils/constants'
import { useParams } from 'react-router-dom'
import { baseApi } from '../../api/axiosInstance'
import Youtube from "react-youtube"

function MovieDetails() {
    const params = useParams()
    const [details, setDetails] = useState({})
    const [trailers, setTrailers] = useState([])

    const fetchDetails = async () => {
        try {
            const response = await baseApi.get(`/3/movie/${params.id}?language=en-US`)
            setDetails(response.data)
        } catch {
            err => console.log(err)
        }
    }

    const fetchTrailer = async () => {
        try {
            const response = await baseApi.get(`/3/movie/${params.id}/videos?language=en-US`)
            setTrailers(response.data.results.filter(data => data.type === 'Trailer'))
        } catch {
            err => console.log(err)
        }
    }

    useEffect(() => {
        fetchDetails()
        fetchTrailer()
    }, [params])

    const opts = {
        height: '350',
        width: '564',
    };


    return (<>

        <div className='relative -mt-9 w-full'>
            <div className="absolute -top-[290px] mt-0">
                <img src={imagePath + details?.backdrop_path} className='opacity-40' alt="" />
                <div className="absolute bottom-0 w-full h-full _trailerLeftgradient"></div>
            </div>
            <div className="relative w-full mt-[300px] pt-[300px]">
                <div className="flex flex-col gap-8 w-[80%] mx-auto ">
                    <div className="flex gap-16 ">
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
                    <div className="row gap-x-8 gap-y-10 ">
                        {trailers.map(link =>
                            <div className="col flex flex-col gap-0">
                                <Youtube videoId={link.key} opts={opts} />
                                <h1 className='text-xl'>{link.name}</h1>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div >
    </>
    )
}

export default MovieDetails