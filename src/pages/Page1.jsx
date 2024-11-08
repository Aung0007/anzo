import React from 'react'
import { Allimg } from '../Context'
import TiltText from '../Components/TiltText'
import Page1Bottom from '../Components/Page1Bottom'

const Page1 = () => {



  
  return (
    <>
    <div className='h-[100vh] p-7 bg-white' >
        <div className=' shadow-xl shadow-black h-full w-full rounded-[50px] bg-[url(./assets/Image/ANZO.jpg)] bg-cover p-10'>
            <img className='h-16 ml-4' src={Allimg.Wlogo} alt="" />
            <TiltText />
            <Page1Bottom/>
        </div>
    </div>
    </>
  )
}

export default Page1
