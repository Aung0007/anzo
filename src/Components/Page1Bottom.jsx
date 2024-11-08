import React from 'react'
import { Allimg } from '../Context'


const Page1Bottom = () => {
  return (
    <>
    <div className='mt-16 flex justify-between text-white absolute left-0 bottom-0 w-full px-20 '>
        <div className='gap-4 mt-[-100px]'>

<h2 className=' font-[anzo]'>
BRAND DESIGN | WEBSITE DESIGN</h2>
<h3 className='text-gray-300'>BESPOKE FREELANCE</h3>
        </div>
        
        <div className=' mt-[-220px]'>
            <img src={Allimg.roImg} className='h-16 animate-spin' style={{animationDuration: '6s'}} alt="" />
            <img src={Allimg.roImg2} className='h-16 mt-4 animate-spin' style={{animationDuration: '6s'}} alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Page1Bottom
