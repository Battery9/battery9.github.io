import React from 'react'
import Timeline from './Timeline'
import { FiPieChart } from 'react-icons/fi'
import Skills from './Skills'

function Resume() {
  return (
    <div className='text-white m-4'>
      <div className="flex items-center gap-2 py-1 px-3 rounded-full shadow shadow-[#65c3ba] bg-gray-700 text-3xl">
        <FiPieChart />
        <h2>My Résumé</h2>
      </div>
      <Timeline />
      <Skills />
    </div>
  )
}

export default Resume