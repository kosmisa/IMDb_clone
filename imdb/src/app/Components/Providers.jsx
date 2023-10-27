"use client"

import { ThemeProvider } from 'next-themes'
import React from 'react'
import { useState } from 'react'



export default function Providers({children}) {
    const [isDarkTheme, setDarkTheme] = useState(true);

  return (
    <div>
        <ThemeProvider enableSystemSystem={true} attribute="class">
            <div className="dark:bg-sky-950 dark:text-gray-200 
                            bg-orange-300 text-gray-700 
                            transition-colors duration-1000 min-h-screen select-none">
                {children}
            </div>
        </ThemeProvider>
    </div>
  )
}
