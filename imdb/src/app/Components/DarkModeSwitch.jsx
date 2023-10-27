"use client"
import React, { useEffect, useState } from 'react'
import {BsSun} from "react-icons/bs"
import {BsMoonStarsFill} from "react-icons/bs"
import { useTheme } from 'next-themes'

export default function DarkModeSwitch() {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const currentTheme = theme === "system" ? systemTheme : theme;
  
  return (
    <>
        {mounted && (currentTheme === "dark" ? (
            <BsSun className='text-xl cursor-pointer hover:text-yellow-400' onClick={()=>setTheme("light")}/>
        ):(
            <BsMoonStarsFill className='text-xl cursor-pointer hover:text-blue-600' onClick={()=>setTheme("dark")}/>
        ))}
    </>
  )
}
