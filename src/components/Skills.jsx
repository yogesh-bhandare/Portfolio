import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Python from '../assets/python.png'
import Django from '../assets/django.png'
import Django_Rest from '../assets/django-rest.png'
import Mysql from '../assets/mysql.png'
import Pandas from '../assets/pandas.png'
import Numpy from '../assets/numpy.svg'
import CPP from '../assets/c-logo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full py-10 bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 bg-[#092E20] mx-auto' src={Django} alt="HTML icon" />
                  <p className='my-4'>DJANGO</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 bg-white mx-auto' src={Django_Rest} alt="HTML icon" />
                  <p className='my-4'>REST FRAMEWORK</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
                  <p className='my-4'>MY SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-18 h-20 mx-auto' src={CPP} alt="HTML icon" />
                  <p className='my-4'>CPP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GIT & GITHUB</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 h-20 mx-auto content-center object-contain' src={Numpy} alt="HTML icon" />
                  <p className='my-4'>NUMPY</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 h-20 bg-white mx-auto content-center object-contain' src={Pandas} alt="HTML icon" />
                  <p className='my-4'>PANDAS</p>
              </div> */}
          </div>
      </div>
    </div>
  );
};

export default Skills;
