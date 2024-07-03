import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full py-20 bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="my-4">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Yogesh, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className="text-xl">
            <p>
            I am passionate about building excellent and innovative software that improves the lives of those around me. With expertise in DSA, problem solving, and AI/ML, I am equipped to tackle complex challenges and deliver cutting-edge solutions. What would you do if you had a software expert available at your fingertips?
            </p>
          </div>
        </div>
        </div>
        <div className="my-6">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Education
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              PES Modern College of Engineering
            </p>
          </div>
          <div className="text-xl">
            <p>
              2022 - 2026
            </p>
            <p>
              B.E. in Artificial Intelligence & Data Science
            </p>
            <p>
              CGPA: 8.14
            </p>
          </div>
          {/* <div className="sm:text-right text-4xl font-bold">
            <p>
              SSM High School
            </p>
          </div>
          <div className="text-xl">
          <p>
              2020 - 2022
            </p>
            <p>
              High School
            </p>
            <p>
            Percentage: 72.33%
            </p>
          </div>
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Sarhad School
            </p>
          </div>
          <div className="text-xl">
            <p>
              2010 - 2020
            </p>
            <p>
            Primary & Secondary Education
            </p>
            <p>
            Percentage: 73%
            </p>
          </div> */}
        </div>
        </div>
        {/* <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Experiances
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Sai Kumar, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="text-xl">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
