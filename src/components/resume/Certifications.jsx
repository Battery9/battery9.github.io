import React, { useState } from 'react'
import demo from "../../assets/demo cert.jpeg"
import demo2 from "../../assets/demo cert2.png"
import LazyLoad from 'react-lazy-load'
import { motion } from 'framer-motion'

function Certifications() {
  const certs = [{
    img: demo,
    course: 'Best Certification for the Best Man',
    issued_by: 'The God',
    link: ""
  },
  {
    img: demo2,
    course: 'Another Demo Certificate',
    issued_by: 'Myself Institution of Gorge',
    link: ""
  },
  {
    img: demo,
    course: 'Best Certification for the Best Man',
    issued_by: 'The God',
    link: ""
  },
  {
    img: demo,
    course: 'Best Certification for the Best Man',
    issued_by: 'The God',
    link: ""
  },
  {
    img: demo,
    course: 'Best Certification for the Best Man',
    issued_by: 'The God',
    link: ""
  },
  {
    img: demo,
    course: 'Best Certification for the Best Man',
    issued_by: 'The God',
    link: ""
  }]

  const [modalVisible, setModalVisible] = useState(false)
  const [modalImage, setModalImage] = useState(null)
  const handleClose = (e) => {
    if (e.target.id !== 'modalImg') {
      setModalVisible(false)
    }
  }

  return (
    <section>
      <h1 className="m-2 text-2xl font-semibold">Certifications and Courses</h1>
      <div className='grid lg:grid-cols-3 mx-4 gap-4'>
        {certs.map((c, index) => {
          return (
            <LazyLoad>
              <motion.div
                className='p-2 rounded-lg shadow-lg flex flex-col bg-gradient-to-r from-teal-400/60 to-blue-500/50 hover:from-blue-500/50 hover:to-teal-400/60 hover:shadow-none hover:scale-105 shadow-black text-center transition-all duration-300'
                key={c.course}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <img src={c.img} alt={c.course} className='h-[150px]' />
                <div className='mt-2'>
                  <h3 className='text-lg font-semibold leading-5 line-clamp-1 hover:line-clamp-none'>
                    {c.course}
                  </h3>
                  <p className='italic'>{c.issued_by}</p>
                </div>
                <div className='mt-2 flex justify-between items-center'>
                  <button
                    className='bg-[#374151] text-[#38fbe7] px-4 py-2 rounded-lg hover:bg-[#428bffa6] transition duration-300'
                    onClick={() => {
                      setModalVisible(true)
                      setModalImage(c.img)
                    }}
                  >
                    View
                  </button>
                  <a href={c.link} className='bg-[#374151] text-[#31ffea] px-4 py-2 rounded-lg hover:bg-[#428bffa6] transition duration-300'>Link</a>
                </div>
              </motion.div>
            </LazyLoad>
          )
        })}
      </div>

      <div className={`fixed inset-0 bg-transparent ${modalVisible ? 'block' : 'hidden'} flex justify-center items-center`} onClick={handleClose}>
        <div className='relative'>
          <button className='absolute right-0 top-0 bg-black rounded-full w-7 h-7' onClick={() => setModalVisible(false)}>X</button>
          <img src={modalImage} alt="image" className='h-[500px]' id='modalImg'/>
        </div>
      </div>
    </section>
  );
}

export default Certifications;