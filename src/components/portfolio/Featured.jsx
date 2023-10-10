import React from 'react'
import { FiGlobe, FiGithub } from 'react-icons/fi'
import project_img from '../../assets/demo-project.jpeg'
import { motion } from 'framer-motion'
import LazyRender from "../../shared/LazyRender"

function Featured() {
    const featuredProjects = [{
        name: "YourTube - A ReactJS YouTube clone.",
        tag: ['TailwindCSS', 'ReactJS'],
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatem facere vitae perspiciatis at qui eligendi distinctio iure dolorem?',
        link: '#',
        github: '#',
        image: ''
    },
    {
        name: "YourTube - A ReactJS YouTube clone.",
        tag: ['TailwindCSS', 'ReactJS'],
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatem facere vitae perspiciatis at qui eligendi distinctio iure dolorem?',
        link: '#',
        github: '#',
        image: ''
    },
    {
        name: "YourTube - A ReactJS YouTube clone.",
        tag: ['TailwindCSS', 'ReactJS'],
        note: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque voluptatem facere vitae perspiciatis at qui eligendi distinctio iure dolorem?',
        link: '#',
        github: '#',
        image: ''
    }]


    return (
        <section className='grid grid-cols-2 m-2'>
            {featuredProjects.map((e, i) => {
                return (
                    <LazyRender>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7, delay: i * 0.3 }}
                            className="p-4 flex gap-2 border justify-between border-[#65c3ba] bg-[#65c3ba]/5 rounded-md m-2" key={`project ${i}`}>
                            <div>
                                <h3 className='font-bold text-[#65c3ba]'>{e.name}</h3>
                                <div className="flex flex-wrap gap-2 text-xs m-1">
                                    {e.tag.map((tag, i) => {
                                        return <p className="bg-[#65c3ba] p-1 rounded-lg" key={i}>{tag}</p>
                                    })}
                                </div>
                                <p className="text-sm">
                                    {e.note}
                                </p>
                                <div className='flex items-center gap-3 m-2 font-semibold'>
                                    <a href={e.link} className='flex gap-1 justify-center items-center bg-[#1b4ade] px-2 py-1 rounded-lg  hover:bg-blue-600'><FiGlobe />Visit</a>
                                    <a href={e.github} className='flex gap-1 justify-center items-center bg-[#23b03f] px-2 py-1 rounded-lg hover:bg-green-500'><FiGithub />Source Code</a>
                                </div>
                            </div>
                            <img src={project_img} alt="pro" className='h-[75px] rounded' />
                        </motion.div>
                    </LazyRender>)
            })}
        </section>
    )
}

export default Featured