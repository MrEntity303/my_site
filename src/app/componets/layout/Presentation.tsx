import React from 'react';

const Presentation = () => {
    return (
        <div className='mt-40'>
        <div className="flex justify-center items-center space-x-2">	
            <span className='text-2xl'>Ciao, benvenuto (</span>
            <img src="./img/wave-hello.gif" alt="hi" className='w-10 ml-2'/>
            <span className="text-2xl">) , Io sono</span>
        </div>
        <div className="flex justify-center items-center">
            <h1 className="font-bold text-6xl">Patryk Bialowas</h1>
        </div>
        <div className="flex justify-center items-center">
            <span className='text-2xl'>Enthusiast Developer</span>
        </div>
        </div>
    );
};

export default Presentation;