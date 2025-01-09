import React from 'react';

interface ProjectCardProps {
    title: string;
    skills: string[];
    description: string;
    isClosedSource: boolean;
    sourceUrl?: string; // Rendiamo opzionale la proprietà sourceUrl
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, skills, description, isClosedSource, sourceUrl }) => {
    return (
        <div className="flex justify-start flex-col bg-grayCard rounded-lg p-3 w-80 h-36">
            <h3 className='text-lg font-bold text-sky-400'>{title}</h3>
            <span className='flex flex-row items-center font-extrabold'>
                Skills:
                {skills.map((skill, index) => (
                    <img
                        key={index}
                        src={skill}
                        alt="Skill icon"
                        className='w-5 h-5 ml-1'
                    />
                ))}
            </span>
            <p>{description}</p>
            <div>
                {isClosedSource ? (
                    <div className='flex flex-row justify-between'>
                    <span className='border-4 rounded-full p-1 my-2 text-red-600 border-red-600'>closed-source</span>
                    </div>
                ) : (
                    <div className='flex flex-row justify-between'>
                    <span className='border-4 rounded-full p-1 my-2 text-green-600 border-green-600'>open-source</span>
                    <a href={sourceUrl} className='flex flex-row border-4 rounded-full p-1 my-2'>
                        Source <img src="https://img.icons8.com/?size=100&id=60664&format=png&color=FFFFFF" alt="source_icon" className='w-5 h-5' />
                    </a>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ProjectCard;