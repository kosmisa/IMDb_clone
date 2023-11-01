import React from 'react'
import Navbar_Item from './Navbar_Item'

export default function Navbar() {
  return (
    <div className='flex justify-center bg-orange-400 dark:bg-sky-900 lg:text-lg p-4'>
          <Navbar_Item title="Trending" param="fetchTrending" />
          <Navbar_Item title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
