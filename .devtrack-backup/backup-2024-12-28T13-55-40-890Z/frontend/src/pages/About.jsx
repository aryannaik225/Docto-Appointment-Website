import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p className='capitalize'>Welcome to Prescripto, Your Trusted Partner in Managing Your Healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their healt records.</p>
          <p className='capitalize'>Prescripto is committed to excellence in healthcare technology. we continuously shrive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. whether you're booking your first appointment or managing ongoing care, prescripto is here to supposrt you every step of the way.</p>
          <b className='capitalize text-gray-800'>Our vision</b>
          <p className='capitalize'>Our vision at prescripto is to create a seamless healthcare experience for every user. we aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p className='uppercase'>Why <span className='text-gray-700 font-semibold'>Choose us</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='uppercase'>Efficiency:</b>
          <p className='capitalize'>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='uppercase'>Convenience:</b>
          <p className='capitalize'>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='uppercase'>Personalization:</b>
          <p className='capitalize'>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About