import Results from '@/Components/Results';
import error from '@/app/error';
import React from 'react'

export default async function SearchPage({params}) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=true`
    );
        if(!response.ok) {
            throw new Error ("Error: failed to fetch data")
        }
        const data = await response.json();
        const results = data.results
  return (
    <div>
        {results && results.length === 0 && (<h1 className='font-bold text-center pt-6'>No Results found</h1>)}
        {results && <Results results={results}/>}
    </div>
  )
}
