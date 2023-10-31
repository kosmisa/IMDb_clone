import Image from 'next/image';
import React from 'react'

async function getMovie(movieId){
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
    return await res.json();    
}

export default async function page({params}) {
    const movieId = params.id;
    const movie = await getMovie(movieId)
        return (
            <div className="w-full">
                <div className='p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6'>
                    <Image 
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_paty || movie.poster_path}`}
                        className='rounded-lg' 
                        placeholder='blur'
                        style={{maxWidth: '100%', height: "100%"}}
                        blurDataURL='/loading_animation.svg'
                        alt='Error: image is not available'
                        width={270}
                        height={300} 
                    ></Image>
                    <div className='p-2'>
                        {/* Title */}
                        <h2 className='text-3xl mb-3 font-bold dark:text-sky-400 text-indigo-700'>{movie.title || movie.name}</h2>
                        {/* Overview */}
                        <p className='text-lg mb-3'>
                            <span className='font-semibold mr-1 text-xl dark:text-sky-400 text-indigo-700'>Overview: </span>
                            <span className=' dark:text-teal-400 text-orange-700'>{movie.overview}</span>
                        </p>
                        {/* Release Date */}
                        <p className='mb-3 '>
                            <span className='font-semibold mr-1  dark:text-sky-300 text-indigo-600'>Date Release: </span>
                            <span className=' dark:text-teal-400 text-orange-700'>
                            {movie.release_date || movie.first_air_date}
                            </span>
                        </p>
                        {/* Ratings */}
                        <p className='mb-3 '>
                            <span className='font-semibold mr-1  text-red-600 dark:text-red-400'>Likes: </span>
                            <span className=' dark:text-sky-300 text-indigo-600'>
                            {movie.vote_count}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        )
}
