import React from 'react'
import menu1 from './assets/menu_page-0001.jpg'
import menu2 from './assets/menu_page-0002.jpg'
import menu3 from './assets/menu_page-0003.jpg'
import menu4 from './assets/menu_page-0004.jpg'
import menu5 from './assets/menu_page-0005.jpg'
import menu6 from './assets/menu_page-0006.jpg'
import menu7 from './assets/menu_page-0007.jpg'

function Page() {
  return (
    <div className='md:flex flex-wrap'>
        <img src={menu1} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu2} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu3} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu4} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu5} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu6} className='w-full h-full md:w-1/2' alt="" />
        <img src={menu7} className='w-full h-full md:w-1/2' alt="" />
    </div>
  )
}

export default Page
