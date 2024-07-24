import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  // projects file
  const project = data;

  return (
    <div name="work" className="w-full py-20 text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-cente w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              className="max-w-sm bg-[#0a192f] shadow-md shadow-[#040c16] text-gray-300 rounded-lg group"
            >
              <div
                className="rounded-t-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})`, height: '155px' }}
              >
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 h-full flex justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-opacity-50 rounded-t-lg">
                  <div className="text-center">
                    {/* eslint-disable-next-line */}
                    <p>{item.name}</p>
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg"
                      >
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg"
                      >
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <a href={item.github}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {item.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
          <a href="https://github.com/yogesh-bhandare">See More</a></button>
      </div>
    </div>
  );
};

export default Work;
