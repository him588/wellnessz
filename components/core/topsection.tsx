import Image from 'next/image'
import React from 'react'
import imf from "../../public/anastase-maragos-4dlhin0ghOk-unsplash.jpg"
import Header from './header'
function Topsection() {
  return (
    <div className=' h-full w-full relative'>
        <Image unoptimized src={imf} alt='' height={0} width={0} style={{height:"100%",width:"100%",position:"absolute",zIndex:"10"}}/>
        <div className=' h-full w-full z-20 relative'>
        <div className=' h-[10%]'>
        <Header/>
        </div>
        <div className=' flex flex-col gap-5 h-[90%] justify-center px-14'>
            <div className=' text-white text-[45px] font-semibold'> <span className=' text-[#67bc29]'>Experience </span>the Ultimate <span className=' block'>Fitness Revolution.</span> </div>
            <p className=' text-white font-light text-sm'>Unleash your potential in our state-of-the-art facility, equipped with top-notch <span className=' block'>equipment and expert  trainers. join us on a journey  to a stonger,healthier you.</span> Get started today!  </p>
            <div className=' flex gap-4'>
                <button className=' bg-[#67bc29] h-10 w-[150px] text-[14px] font-light text-white rounded'>Try a Free Trail</button>
                <button className='  h-10 w-[150px] text-[14px] font-light text-white border-solid border-[2px] border-white rounded'>Contact Us</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Topsection
