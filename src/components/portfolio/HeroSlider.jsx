import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import img1 from '../../assets/demo cert.jpeg'
import img2 from '../../assets/demo cert2.png'
import { delay, motion } from 'framer-motion';
import LazyRender from "../../shared/LazyRender"
import LazyLoad from 'react-lazy-load';

const HeroSlider = () => {
  const sliderItems = [{
    image: img1,
    link: '#'
  },
  {
    image: img2,
    link: '#'
  }]

  const sliderOptions = {
    type: 'carousel',
    perPage: 1,
    rewind: true,
    autoplay: true,
    interval: 3000,
    gap: '1rem',
    width: '90%'
  };

  return (
    <>
      <h3 className='text-xl font-semibold m-2'>Heros of '23</h3>
      <LazyRender>
        <motion.div
          initial={{ opacity: 0, y: '50%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}>
          <Splide options={sliderOptions} className='mx-auto'>
            {sliderItems.map((item, i) => (
              <SplideSlide key={i}>
                <a href={item.link}>
                  <img src={item.image} alt={`Image ${i}`} className='h-[60vh] w-full' />
                </a>
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>
      </LazyRender>
    </>
  );
};

export default HeroSlider;
