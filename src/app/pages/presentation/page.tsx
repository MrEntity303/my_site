'use client';
import React, { useState, useEffect} from 'react';
 
const Presentation = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, );

    return (
<main id="home" className="flex flex-col-reverse pt-16 lg:flex-row justify-center items-center lg:min-h-screen">
  <div className="flex w-full lg:w-1/2 justify-center items-center">
    <div className="text-center p-3">
      <div className="flex justify-center items-center space-x-2">
        <span className='md:text-2xl text-gray-300'>Ciao, benvenuto (</span>
        <img src="./img/wave-hello.gif" alt="hi" className='w-10 ml-2'/>
        <span className="md:text-2xl text-gray-300">) , Io sono</span>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold md:text-6xl text-gray-300">Patryk Bialowas</h1>
      </div>
      <div className="flex justify-center items-center">
        <span className='md:text-2xl mt-2 text-gray-300'>Enthusiast Developer</span>
      </div>
    </div>
  </div>
  
  <div className="flex w-full lg:w-1/2 justify-center items-center p-3">
    <img src="..\img\profile1.jpg" alt="profile" className='rounded-full w-1/2 h-1/2 border-4 border-sky-400'/>
  </div>
  <a href="#about" className={`absolute bottom-4 flex flex-col justify-center items-center transition-opacity duration-300 ${
          isScrolling ? 'hidden' : 'block'
        }`}>
    <span className="hidden lg:flex text-2xl animate-pulseGrow">👇</span>
    <span className='hidden lg:flex text-gray-300'>Scroll Down</span>
  </a>
</main>

    );
};

export default Presentation;