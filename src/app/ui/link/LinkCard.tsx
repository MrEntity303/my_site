import React from 'react';

interface LinkCardProps {
    name: string;
    imgIcon: string;
    url: string;
}
const LinkCard: React.FC<LinkCardProps> = ({ name, imgIcon, url }) => {
    return (
        <a className="flex flex-col  items-center bg-grayCard p-4 rounded-lg w-24 h-24 group hover:bg-white hover:scale-105 transition-transform duration-300" href={url}>
            <img className="w-12 h-12 m-auto" src={imgIcon} alt="LinkedIn" />
            <span className='font-extrabold text-gray-300 group-hover:text-customGray'>{name}</span>
        </a>
    );
};
export default LinkCard;