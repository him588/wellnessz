import React from 'react'
import Image from 'next/image'

function News() {
  return (
    <div className=' min-h-[95vh] bg-white p-14 flex items-center flex-col gap-8'>
        <p className=' text-[40px] font-bold leading-[40px]'>News & Blogs </p>
        <p className=' text-sm font-medium'>Unleash your potential in our state-of-the-art facility, equipped with top-notch <span className=' block'>equipment and expert  trainers. join us on a journey  to a stonger,healthier you.</span> </p>
        <div className=' flex gap-5 w-full'>
            <div  className={`h-[220px] w-[350px]  p-4 flex flex-col  gap-4 rounded   `}>
            <Image unoptimized style={{height:"250px",width:"300px",borderRadius:'10px'}} src={"https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGd5bXxlbnwwfDB8MHx8fDA%3D"} alt='' height={0} width={0} />
            <p className=' font-bold text-lg'>How to bulk properly?</p>
            <p className=' text-[12px] text-[#67bc29] -mt-2 cursor-pointer '>Read More</p>
          </div>
          <div  className={`h-[220px] w-[350px]  p-4 flex flex-col  gap-4 rounded   `}>
            <Image unoptimized style={{height:"250px",width:"300px",borderRadius:'10px'}} src={"https://images.unsplash.com/photo-1522898467493-49726bf28798?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGd5bXxlbnwwfDB8MHx8fDA%3D"} alt='' height={0} width={0} />
            <p className=' font-bold text-lg'>Intremittent Fasting:</p>
            <p className=' text-[12px] text-[#67bc29] -mt-2 cursor-pointer'>Read More</p>
          </div>
          <div  className={`h-[220px] w-[350px]  p-4 flex flex-col  gap-4 rounded   `}>
            <Image unoptimized style={{height:"250px",width:"300px",borderRadius:'10px'}} src={"https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGd5bXxlbnwwfDB8MHx8fDA%3D"} alt='' height={0} width={0} />
            <p className=' font-bold text-lg'>8 ways to burn more fat</p>
            <p className=' text-[12px] text-[#67bc29] -mt-2 cursor-pointer'>Read More</p>
          </div>
        </div>
        {/* <div className=' flex items-center '>
        <button className=' bg-[#67bc29] h-10 w-[150px] text-[14px] font-light text-white rounded'>Try a Free Trail</button>
        </div> */}

      
    </div>
  )
}

export default News
