"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    // Search function
    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        if(!search) return
        router.push(`/search/${search}`);
    }

  return (
    <form 
        className='flex max-w-6xl mx-auto my-3 justify-between items-center '
        onSubmit={handleSubmit}>
            <input 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type='text' 
                placeholder='Enter keywords...'
                className='w-full h-14  bg-orange-400 dark:bg-sky-900 rounded-full placeholder-indigo-700 dark:placeholder-sky-400 dark:text-sky-400 text-indigo-700 outline-none px-3 flex-1 '
                >
            </input>
            <div className='flex mx-2'>
                {!search && (<button 
                        type='submit'
                        className="`text-indigo-700  bg-orange-400 dark:bg-sky-900 font-bold rounded-lg">
                            <span className='font-bold mx-2  dark:text-sky-400  text-indigo-700'>Search</span>
                    </button>)}
                {search && (<button 
                        type='submit'
                        className="`text-indigo-700 bg-orange-400 dark:bg-sky-900 font-bold rounded-lg ">
                            <span className='font-bold mx-2  dark:text-sky-400  text-indigo-700 hover:animate-pulse'>Search</span>
                    </button>)}
                    
                </div>
    </form>
  )
}
