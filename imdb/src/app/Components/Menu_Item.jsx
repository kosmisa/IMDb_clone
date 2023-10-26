import Link from 'next/link'
import React from 'react'

export default function Menu_Item({title, address, Icon}) {
  return (
    <div>
        <Link href={address} className='mx-4 lg:mx-6 hover:text-sky-400'>
            <Icon className="text-2xl sm:hidden mx-4"/>  {/*sm - je velicina => od telefonskog displeja */}
            <p className="hidden sm:inline my-2 text-sm">{title}</p>

        </Link>
    </div>
  )
}
