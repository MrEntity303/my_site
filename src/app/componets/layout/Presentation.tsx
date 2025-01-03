import React from 'react';

const Presentation = () => {
    return (
        <div className='my-40'>
        <div className="flex justify-center items-center">	
            <span className='text-2xl'>Ciao, benvenuto (</span>
            <img src="./img/wave-hello.gif" alt="hi" style={{ width: '2.4em', marginLeft: '0.5em' }}/>
            <span className="text-2xl">) , Io sono</span>
        </div>
        <div className="flex justify-center items-center">
            <h1 style={{ fontSize: '3.0rem'}}>Patryk Bialowas</h1>
        </div>
        <div className="flex justify-center items-center">
            <span className='text-2xl'>Enthusiast Developer</span>
        </div>
        </div>
    );
};

export default Presentation;