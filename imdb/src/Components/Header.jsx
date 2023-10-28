import React from 'react';
import Menu_Item from './Menu_Item';
import {ImHome} from 'react-icons/im';
import {FaInfo} from 'react-icons/fa';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
 
export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-7xl sm:mx-auto items-center py-5">
      {/*Nav_Links/Icons*/}
      <div className="flex font-bold">
          <Menu_Item title="HOME" address="/" Icon={ImHome}/>    
          <Menu_Item title="ABOUT" address="/about" Icon={FaInfo}/>
      </div>
      {/* Logo */}
      <div className="flex items-center space-x-5">
          <DarkModeSwitch />
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-bold bg-sky-600 dark:bg-orange-400 duration-1000 py-1 px-2 rounded-lg mr-1">IMDb</span>
              <span className="text-xl hidden sm:inline">Clone</span>
              </h2>
          </Link>
      </div>
    </div>
  )
}

