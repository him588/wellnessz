import React from 'react'

function Package() {
  return (
    <div className=' bg-[#1a1a1a] h-[95vh] p-14 flex items-center flex-col gap-8'>
        <p className=' text-[40px] font-bold leading-[40px] text-white'>Package and Pricing</p>
        <p className=' text-sm font-normal text-white'>Pricing build for people just like you. </p>
        <div className=' flex items-center justify-center gap-5'>
            <div className=' h-[250px] w-[200px] bg-white rounded-lg p-3'>
                <div>
                <p>Regular</p>
                <p>Regular Membership</p>
               </div>
            </div>
        </div>



      
    </div>
  )
}

export default Package
