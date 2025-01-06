import React from 'react';

const Presentation = () => {
    return (
<main className=" flex flex-col-reverse lg:flex-row justify-center items-center h-screen">
  <div className="flex w-full lg:w-1/2 justify-center items-center">
    <div className="text-center p-3">
      <div className="flex justify-center items-center space-x-2">
        <span className='text-2xl'>Ciao, benvenuto (</span>
        <img src="./img/wave-hello.gif" alt="hi" className='w-10 ml-2'/>
        <span className="text-2xl">) , Io sono</span>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-6xl">Patryk Bialowas</h1>
      </div>
      <div className="flex justify-center items-center">
        <span className='text-2xl mt-2'>Enthusiast Developer</span>
      </div>
    </div>
  </div>
  
  <div className="flex w-full lg:w-1/2 justify-center items-center p-3">
    <img src="..\img\profile1.jpg" alt="profile" className='rounded-full w-1/2 h-1/2 border-4 border-sky-400'/>
  </div>
</main>

    );
};

export default Presentation;

        // <div className='mt-40'>
        // <div className="flex justify-center items-center space-x-2">	
        //     <span className='text-2xl'>Ciao, benvenuto (</span>
        //     <img src="./img/wave-hello.gif" alt="hi" className='w-10 ml-2'/>
        //     <span className="text-2xl">) , Io sono</span>
        // </div>
        // <div className="flex justify-center items-center">
        //     <h1 className="font-bold text-6xl">Patryk Bialowas</h1>
        // </div>
        // <div className="flex justify-center items-center">
        //     <span className='text-2xl'>Enthusiast Developer</span>
        // </div>
        // </div>