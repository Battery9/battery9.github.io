import React from 'react'
import { motion } from "framer-motion"
import { FiBattery } from 'react-icons/fi'
import LazyRender from '../../shared/LazyRender'

function OtherProject() {
    return (
        <>
            <h2 className="text-xl font-semibold m-2">More Projects and Works . . </h2>
            <div className="grid grid-cols-2 gap-4 mx-4">
                {/* {services.map((service, index) => ( */}
                <LazyRender>
                    <motion.div
                        className="p-2 rounded-lg shadow-sm flex items-center bg-gradient-to-r from-teal-400/60 to-blue-500/50 hover:from-blue-500/50 hover:to-teal-400/60 hover:shadow-none shadow-white/60"
                        initial={{ opacity: 0, x: '-60%' }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9 }}
                    >
                        <div className="bg-white p-3 flex items-center justify-center rounded-full mr-3 transition-transform transform text-black">
                            <FiBattery />
                        </div>
                        <div>
                            <h3 className="font-semibold">Title</h3>
                            <p className="text-gray-300 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </motion.div>
                </LazyRender>
                {/* ))} */}
            </div>
        </>
    )
}

export default OtherProject