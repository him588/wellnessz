import React, { useState } from 'react'
import { CertificateIcon, GymIcon, Teamicon } from '../icon'

function Services() {
   const [selected,setselected]=useState({
    team:false,
    gym:false,
    certificate:false
   })
   const updateSelected = (prop:string) => {
    setselected({
      team: prop === 'team',
      gym: prop === 'gym',
      certificate: prop === 'certificate'
    });
  };

  return (
    <div className=' min-h-[95vh] bg-white p-14 flex items-center flex-col gap-8'>
        <p className=' text-[40px] font-bold leading-[40px]'>Explore Our Services</p>
        <p className=' text-sm font-medium'>Unleash your potential in our state-of-the-art facility, equipped with top-notch <span className=' block'>equipment and expert  trainers. join us on a journey  to a stonger,healthier you.</span> </p>
        <div className=' flex gap-5 w-full'>
            <div onClick={()=>updateSelected("team")} className={`h-[220px] w-[350px]  p-4 flex flex-col items-center gap-2 rounded cursor-pointer  ${selected.team?"shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]":""}`}>
                <div>
                    <Teamicon h={35} w={35} c='black'/>
                </div>
                <p className=' text-[22px] font-semibold text-[#6c7281]'>Universal Membership</p>
                <p className=' text-gray-400 text-sm text-center'>1 Membership 5 gyms , with a single <span className=' block'>membership you can train at all of our </span>branches as you prefer</p>
            </div>
            <div onClick={()=>updateSelected("gym")} className={`h-[220px] w-[350px]  p-4 flex flex-col items-center gap-2 rounded cursor-pointer  ${selected.gym?"shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]":""}`}>
                <div>
                    <GymIcon h={35} w={35} c='black'/>
                </div>
                <p className=' text-[22px] font-semibold text-[#6c7281]'>Customized Training</p>
                <p className=' text-gray-400 text-sm text-center'>We provide a full Customized nutrition and <span className=' block'>training program according to your </span>personal goals </p>
            </div>
            <div onClick={()=>updateSelected("certificate")} className={`h-[220px] w-[350px]  p-4 flex flex-col items-center gap-2 rounded cursor-pointer  ${selected.certificate?"shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]":""}`}>
                <div>
                    <CertificateIcon h={35} w={35} c='black'/>
                </div>
                <p className=' text-[22px] font-semibold text-[#6c7281]'>Certified Trainers</p>
                <p className=' text-gray-400 text-sm text-center'>Bring to the table win survival <span className=' block'>strategies ensure procative </span>new domination.</p>
            </div>
        </div>
        <div className=' flex items-center '>
        <button className=' bg-[#67bc29] h-10 w-[150px] text-[14px] font-light text-white rounded'>Try a Free Trail</button>
        </div>

      
    </div>
  )
}

export default Services
