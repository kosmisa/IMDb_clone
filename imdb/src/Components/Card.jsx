import Link from 'next/link'
import Image from 'next/image'
import {GoHeartFill} from 'react-icons/go'
import React from 'react'

export default function Card({result}) {
  return (
    <div className='cursor-pointer sm:p-3 dark:sm:hover:shadow-sky-400 sm:hover:shadow-indigo-500 sm:shadow-md rounded-lg 
                    sm:border dark:sm:border-sky-400 sm:border-indigo-500 sm:m-2 transition-shadow duration-200 group'>
        <Link href={`/movie/${result.id}`}>
            <Image
                src={`https://image.tmdb.org/t/p/original/${result.backdrop_paty || result.poster_path}`}
                className='sm:rounded-t-lg group-hover:opacity-70 duration-200' 
                placeholder='blur'
                style={{maxWidth: '100%', height: "auto"}}
                blurDataURL='/loading_animation.svg'
                alt='Error image is not available'
                width={500}
                height={300}
            ></Image>
                <div className='p-2'>
                    <p className='line-clamp-3 text-md dark:text-teal-400 text-orange-700'>{result.overview}</p>
                        <h2 className='truncate text-lg font-bold text-indigo-700 dark:text-sky-400'>{result.title || result.name}</h2>
                            <p className='flex items-center dark:text-sky-300 text-indigo-600'>
                                {result.release_date || result.first_air_dat}
                                <GoHeartFill className='h-5 mr-1 ml-3 text-red-600 dark:text-red-400' /> {result.vote_count}
                            </p>
                </div>
        </Link>
    </div>
  )
}
