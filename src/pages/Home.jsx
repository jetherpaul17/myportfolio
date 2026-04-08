import React from 'react';
import profilepic from '../assets/profilepic.png';

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div id='home' className="relative m-6 mt-35 mb-20 scroll-mt-40">
      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 gap-5 lg:grid-cols-[2fr_1fr]">
        <div className="grid grid-rows-[1fr_auto] gap-5 lg:h-162.5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1fr] lg:h-full">
            <div className='bg-gray-900 rounded-3xl p-6 md:p-8 flex items-center justify-center text-center min-h-60 lg:h-full'>
              <h1 className="text-4xl md:text-5xl text-orange-600 float-animation">
                Hi, I'm<br />
                <span className="text-6xl md:text-8xl text-gray-200 block">Jether Paul</span>
              </h1>
            </div>
            <div className='bg-orange-600 rounded-3xl overflow-hidden h-72 md:h-90 lg:h-full'>
              <img src={profilepic} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="bg-orange-600 rounded-3xl p-6 md:p-8 h-auto md:h-55 lg:h-60 flex flex-col md:flex-row justify-center items-center gap-4">

            {/* Logos Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2 p-5 justify-items-center">

              <a
                href="https://github.com/jetherpaul17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-5xl md:text-6xl hover:drop-shadow-md hover:drop-shadow-gray-900 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/jethplane17/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-5xl md:text-6xl hover:drop-shadow-md hover:drop-shadow-gray-900 transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/jethplane17/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-5xl md:text-6xl hover:drop-shadow-md hover:drop-shadow-gray-900 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/jetherpaul.quintana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-5xl md:text-6xl hover:drop-shadow-md hover:drop-shadow-gray-900 transition duration-300"
              >
                <FaFacebook />
              </a>

            </div>

            {/* Text */}
            <div className="flex items-center justify-center md:justify-start">
              <h1 className="text-3xl md:text-5xl text-gray-200 p-5 text-center md:text-left">
                Full Stack Developer <br />
                <span className="text-gray-900 text-2xl md:text-4xl">Virtual Assistant</span>
              </h1>
            </div>

          </div>
        </div>
        <div className='bg-gray-900 w-full rounded-3xl h-72 md:h-162.5 lg:h-162.5 flex flex-col items-center justify-center text-center p-6 md:p-8'>
          <p className="text-gray-200 p-10 text-left">
            I'm a passionate full stack developer and virtual assistant ready to help you bring your ideas to life.
          </p>
          <p className="text-orange-600 text-right">
            - jetherquintana@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;