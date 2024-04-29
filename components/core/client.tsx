import Image from 'next/image'
import React from 'react'
import img from "../../public/Screenshot (202).png"

function Client() {
  return (
    <div className=' min-h-[95vh] bg-white p-14 flex items-center flex-col gap-8  overflow-hidden   '>
        <p className=' text-[40px] font-bold leading-[40px]'>Happy Client</p>
        <p className=' text-sm font-medium text-gray-400'>Unleash your potential in our state-of-the-art facility, equipped with top-notch <span className=' block'>equipment and expert  trainers. join us on a journey  to a stonger,healthier you.</span> </p>
        <div className=' flex gap-5 w-full items-center px-10   justify-between'>
            <div className=' w-[50%]'>
                <p className=' text-sm font-semibold italic text-light text-[gray] mt-10'>Lorem Ipsum has been the industrys standardm <span className=' block'>text ever since the 1500s, when an unknown</span> <span className=' block'>text ever since the 1500s, when an unknown</span>it to make a type specimen book.</p>
                <p className=' font-semibold text-lg mt-5'>Sara Thompsan</p>
                <p className=' text-gray-400 text-sm'>Athletic, Trainer</p>
            </div>
            <div className=' w-[50%]'>
                <div className=''>
                <Image src={img} alt='' unoptimized style={{height:"350px",width:"120%"}} height={0} width={0}/>
                </div>
            </div>
        </div>
        {/* <div className=' flex items-center '>
        <button className=' bg-[#67bc29] h-10 w-[150px] text-[14px] font-light text-white rounded'>Try a Free Trail</button>
        </div> */}

      
    </div>
  )
}

export default Client
