"use client"
import React, { useEffect } from 'react'


export default function Error({error, reset}) {
    useEffect(() => {
        console.log(error)
    },[error]);

  return (
    <div className='text-center mt-10'>
        <h1 className='font-bold'>ERROR</h1>
        <h2>Something went wrong</h2>
        <button className=' dark:bg-sky-800 bg-orange-600 rounded-full'
        onClick={()=> reset()}>
            <span className='dark:hover:text-teal-400 hover:text-yellow-500 font-semibold py-2 px-2 hover:animate-pulse'>Try Again</span>
        </button>
    </div>
  )
}
