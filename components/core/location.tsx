import React from 'react'

function Location() {
  return (
    <div className=' min-h-[60vh] bg-[#1a1a1a] p-14 flex justify-between '>
        <div className=' h-full flex flex-col gap-4 '>
        <p className=' text-[40px] font-bold leading-[40px] text-white'>Our Locations</p>
        <p className=' text-sm font-light text-white'>We are currently at 5 different location <span className=' block'>The biggest struggle for fitness clubs is keeping</span> <span className='block'>customers on the right track. You may already be offering</span>personal coaching, social media updates. </p>
        <button className=' bg-[#67bc29] h-10 w-[150px] text-[14px] font-light text-white rounded'>Try a Free Trail</button>
        </div>
        <div className=' h-[200px] w-[550px] border-[2px] border-solid border-white flex'>
            <div className=' h-full w-[50%] flex flex-col bg-white p-3 gap-2 items-baseline justify-center   '>
                <p className=' font-bold text-lg mt-4 '>Maharajgunj</p>
                <div className=' text-[12px] text-gray-400'>Lorem Ipsum has been the industry<span className='block'>of type and scrambled it to make a type</span>It has survived not only five centuries</div>
            </div>
            <div className=' h-full w-[50%] flex flex-col text-white p-3 gap-2 items-baseline justify-center   '>
                <p className=' font-bold text-lg mt-4 '>Maitidevi</p>
                <div className=' text-[12px] text-white'>Lorem Ipsum has been the industry<span className='block'>of type and scrambled it to make a type</span>It has survived not only five centuries</div>
            </div>
        </div>
    </div>
  )
}

export default Location
