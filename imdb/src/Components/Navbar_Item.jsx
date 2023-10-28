"use client"

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'


export default function Navbar_Item({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
  return (
    <div>
        <Link className={`m-4 hover:text-orange-700 dark:hover:text-sky-400 font-semibold p-2 
            ${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-orange-700 dark:decoration-sky-400 rounded-lg"}`}
                href={`/?genre=${param}`}>
                    {title}
        </Link>
    </div>
  )
}
