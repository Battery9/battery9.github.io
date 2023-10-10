import React from 'react'
import { FiTrello } from 'react-icons/fi'
import Featured from './Featured'
import HeroSlider from './HeroSlider'
import OtherProject from './OtherProject'

function Portfolio() {
  return (
    <div className='text-white m-4'>
      <div className="flex items-center gap-2 py-1 px-3 rounded-full shadow shadow-[#65c3ba] bg-gray-700 text-2xl">
        <FiTrello />
        <h2>My Portfolio</h2>
      </div>
      <Featured />
      <HeroSlider />
      <OtherProject />
    </div>
  )
}

export default Portfolio