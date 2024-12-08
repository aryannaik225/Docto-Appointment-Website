import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div>
        <p>ABOUT <span>US</span></p>
      </div>

      <div>
        <img src={assets.about_image} alt="" />
        <div>
          <p className='font-'>Welcome to Prescripto, Your Trusted Partner in Managing Your Healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their healt records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. we continuously shrive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. whether you're booking your first appointment or managing ongoing care, prescripto is here to supposrt you every step of the way.</p>
          <p>Our vision</p>
          <p>Our vision at prescripto is to create a seamless healthcare experience for every user. we aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

    </div>
  )
}

export default About