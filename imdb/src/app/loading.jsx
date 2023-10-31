import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    // <div className='fixed top-0 bottom-0 right-0 left-0  m-auto z-0 place-content-center'>
    <div className='container mx-52 my-56 flex justify-center'>
        <Image className='h-60' src="loading_animation.svg" alt="loading..."></Image>
    </div>
  )
}
