import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AstronautCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import headshot from '../assets/headshot.png';
import resume from '../assets/KPResume.pdf';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-5`}>
        <div className='flex-1 z-10'>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#0073e6]'>Kensho</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 2D video games <br className='sm:block hidden'/> and web applications.
          </p>
          {/* Download Resume Button */}
          <motion.a
            href={resume}
            download
            className='mt-4 inline-block px-6 py-3 rounded-lg bg-[#0073e6] text-white font-bold shadow-lg transition-transform duration-300 hover:bg-[#005bb5] hover:shadow-[0_0_20px_2px] hover:shadow-blue-400/50'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </div>
        <div className='flex-shrink-0 mt-5 md:mt-0 ml-0 md:ml-[200px] z-10'>
          <img src={headshot} alt='headshot' className='w-[350px] h-[350px] rounded-full border-4 border-blue-500 object-cover'/>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      <AstronautCanvas />
    </section>
  );
};

export default SectionWrapper(Hero, "");
