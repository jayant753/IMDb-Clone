import React, { useEffect, useState } from 'react'
import { imagePath } from '../../utils/constants'
import { useParams } from 'react-router-dom'
import { baseApi } from '../../api/axiosInstance'

const object = {
    "adult": false,
    "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    "belongs_to_collection": null,
    "budget": 25000000,
    "genres": [
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 80,
            "name": "Crime"
        }
    ],
    "homepage": "",
    "id": 278,
    "imdb_id": "tt0111161",
    "origin_country": [
        "US"
    ],
    "original_language": "en",
    "original_title": "The Shawshank Redemption",
    "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    "popularity": 161.431,
    "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    "production_companies": [
        {
            "id": 97,
            "logo_path": "/7znWcbDd4PcJzJUlJxYqAlPPykp.png",
            "name": "Castle Rock Entertainment",
            "origin_country": "US"
        }
    ],
    "production_countries": [
        {
            "iso_3166_1": "US",
            "name": "United States of America"
        }
    ],
    "release_date": "1994-09-23",
    "revenue": 28341469,
    "runtime": 142,
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Released",
    "tagline": "Fear can hold you prisoner. Hope can set you free.",
    "title": "The Shawshank Redemption",
    "video": false,
    "vote_average": 8.705,
    "vote_count": 26160
}

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
        console.log(details)
    }, [details])

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