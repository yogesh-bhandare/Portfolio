import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import person from '../assets/person.jpg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full flex flex-col md:flex-row items-center justify-center md:justify-end h-screen pt-24 px-6 md:px-28 bg-[#0a192f]'>
      {/* Container */}
      <div className='flex mx-4 justify-center md:justify-end w-full md:w-auto'>
        <img className='w-64 h-64 md:w-[450px] md:h-[450px] rounded-full' src={person} alt="yogesh" />
      </div>
      <div className=' mx-4 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
          Yogesh Bhandare
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm a Full Stack AI/ML Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[900px] text-xl'>
        I create dynamic, responsive web applications and integrate cutting-edge AI/ML solutions to drive innovation and efficiency. My work combines robust back-end functionality with intuitive front-end design to deliver seamless digital experiences.
        </p>
        <div className='flex gap-3'>
          
          <Link to='work' smooth={true} duration={1000} className='text-white w-40 group border-2 cursor-pointer px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
