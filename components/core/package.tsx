import React from 'react'
import { TickIcon } from '../icon'

function Package() {
  return (
    <div className=' bg-[#1a1a1a] h-[95vh] p-14 flex items-center flex-col gap-8 '>
        <p className=' text-[40px] font-bold leading-[40px] text-white'>Package and Pricing</p>
        <p className=' text-sm font-normal text-white'>Pricing build for people just like you. </p>
        <div className=' flex items-center justify-center gap-5'>
            <div className=' h-[250px] w-[200px] flex flex-col justify-between bg-white rounded-lg p-3 relative'>
                <div className=' flex flex-col gap-[2px]'>
                <p className=' text-[20px] font-semibold text-black mt-[2px]'>Regular</p>
                <p className=' text-[12px] font-normal text-gray-400'>Regular Membership</p>
               </div>
               <div className=' -mt-10 flex flex-col gap-2'>
                <div className=' flex gap-2 items-center text-[12px]'><TickIcon h={15} w={15} c='black'/> Gym</div>
                <div className=' flex gap-2 items-center text-[12px]'><TickIcon h={15} w={15} c='black'/> Gym & Cardio</div>
               </div>
               <button className=' bg-[#70ad2b] h-10 w-full text-[14px] font-light text-white rounded '>Try a Free Trail</button>
            </div>
            <div className=' h-[250px] w-[450px] flex flex-col justify-between bg-[#303030] rounded-lg p-3 relative'>
                <div className=' flex flex-col gap-[2px]'>
                 <div className=' flex items-center justify-between'>   
                <p className=' text-[20px] font-semibold text-white'>Day Time Membership</p>
                <button className=' rounded-full h-[35px] w-[150px] bg-[#67bc29] text-[12px] text-white'>RECOMMENDED</button>
                </div>
                <p className=' text-[12px] font-normal text-gray-400'>Day Time Membership</p>
               </div>
               <div className=' -mt-1 flex gap-8'>
                <div className=' flex flex-col gap-2'>
                <div className=' flex gap-2 items-center text-[12px] text-white'><TickIcon h={15} w={15} c='white'/> Gym</div>
                <div className=' flex gap-2 items-center text-[12px] text-white'><TickIcon h={15} w={15} c='white'/> Gym & Cardio</div>
                <div className=' flex gap-2 items-center text-[12px] text-white'><TickIcon h={15} w={15} c='white'/> Gym & Cardio</div>
                <div className=' flex gap-2 items-center text-[12px] text-white'><TickIcon h={15} w={15} c='white'/> Gym & Cardio</div>
                </div>
                <div className=' flex flex-col gap-2'>
                <div className=' flex gap-2 items-center text-[12px] text-white'><TickIcon h={15} w={15} c='white'/> Gym</div>
                <div className=' flex gap-2 items-center text-[12px] text-white'><TickIcon h={15} w={15} c='white'/> Gym & Cardio</div>
                <div className=' flex gap-2 items-center text-[12px] text-white'><TickIcon h={15} w={15} c='white'/> Gym & Cardio</div>
                <div className=' flex gap-2 items-center text-[12px] text-white'><TickIcon h={15} w={15} c='white'/> Gym & Cardio</div>
                </div>
               </div>
               <button className=' text-[#70ad2b] h-10 w-[180px] text-[14px] font-semibold  bg-white rounded '>Choose plan (Rs.2,   500) </button>
            </div>
        </div>



      
    </div>
  )
}

export default Package
