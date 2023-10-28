import React from 'react'
import Link from 'next/link';

export default function page() {
  return (
    <div className="max-w-6xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-medium text-orange-300"><span className='dark:bg-sky-600 bg-orange-500 rounded-md px-2'>About</span></h1>
      <p>
        Welcome to IMDb Clone site! It uses NEXT.js as part of practice to learn a new framework!
      </p>

      <p>
        If you have any suggestion or critics please leave a comment on this <Link href="https://github.com/kosmisa/IMDb_clone" className='underline md:underline-offset-4 hover:text-red-700'>Page</Link>
      </p>
    </div>
  );
}
