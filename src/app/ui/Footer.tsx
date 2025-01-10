import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full h-16 bg-gray-800 text-white flex justify-center items-center bottom-0">
            <p className="text-center text-sm text-gray-300">
                © 2025 Patryk <span className='text-yellow-400'>Star</span>. Icons di <a className="text-sky-400" target="_blank" href="https://icons8.com">Icons8</a>
            </p>
        </footer>
    );
};

export default Footer;