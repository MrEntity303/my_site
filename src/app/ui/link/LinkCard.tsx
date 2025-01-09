import React from 'react';

interface LinkCardProps {
    name: string;
    imgIcon: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ name, imgIcon }) => {
    return (
        <a className="flex flex-col justify-center items-center bg-grayCard rounded-lg w-24 h-24 p-4" href="">
            <img className="w-12 h-12 m-auto" src={imgIcon} alt="LinkedIn" />
            <span className='font-extrabold'>{name}</span>
        </a>
    );
};
export default LinkCard;