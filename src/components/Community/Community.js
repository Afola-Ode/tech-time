import React from 'react'
import { Members } from '../../images'

const Community = () => {
  return (
    <section className='bg-[#004DB3] py-16'>
        <div className='flex flex-col justify-center items-center text-center text-white w-2/3 mx-auto'>
        <p className='font-medium text-sm'>JOIN OUR COMMUNITY</p>
        <h2 className='text-4xl my-3'>Are you  ready to connect with the future talent of the tech world</h2>
        <p className='capitalize text-sm mb-3'>meet up with other techstars and grow together</p>
        <img src={Members} alt="" className='lg:w-[42rem]' />
        </div>
        
    </section>
  )
}

export default Community