import React from 'react'
import menu1 from './assets/1.png'
import menu2 from './assets/2.png'
import menu3 from './assets/3.png'
import menu4 from './assets/4.png'
import menu5 from './assets/5.png'
import menu6 from './assets/6.png'

function Page() {
  return (
    <div className='md:flex flex-wrap'>
        <img src={menu1} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu2} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu3} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu4} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu5} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu6} className='w-full h-full md:w-1/2' alt="" />
    </div>
  )
}

export default Page
