import React from 'react'
import { FacebookIcon, InstaIcon, TwitterIcon } from '../icon'

function Fotter() {
  return (
    <div className=' min-h-[50vh] bg-[#1a1a1a] px-14 py-14'>
        <div className=' h-full flex justify-between '>
            <div>
                <p className=' text-lg text-white font-bold'>Pages</p>
                <div className=' text-sm text-white font-light flex flex-col mt-6 gap-4'>
                    <p>About us</p>
                    <p>Location</p>
                    <p>Book a Free Trail</p>
                    <p>Prices and Packages</p>
                </div>
            </div>
            <div>
                <p className=' text-lg text-white font-bold'>Branches</p>
                <div className=' text-sm text-white font-light flex flex-col mt-6 gap-4'>
                    <p>Kumaripati</p>
                    <p>Kamladi</p>
                    <p>Maitidevi</p>
                    <p>Baneswar</p>
                </div>
            </div>
            <div>
                <p className=' text-lg text-white font-bold'>Opening Time</p>
                <div className=' text-sm text-white font-light flex flex-col mt-6 gap-4'>
                    <p>Sunday - Friday (6am - 8pm)</p>
                    <p>Saturday - closed</p>
                    <div className=' flex gap-4'>
                        <TwitterIcon h={20} w={20} c='white'/>
                        <FacebookIcon h={20} w={20} c='white'/>
                        <InstaIcon h={20} w={20} c='white'/>
                    </div>
                </div>
            </div>
        </div>
        <div className=' flex items-end text-[10px] text-white font-extralight justify-end mt-10 opacity-65 '>
            Copyright @ 2020 by Physique Workshop Pvt.Ltd All right reseved.
        </div>
      
    </div>
  )
}

export default Fotter
