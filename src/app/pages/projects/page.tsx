import React from "react";
import ProjectCard from "@/ui/projects/ProjectCard";
import projects from "@/ui/projects/projectsData";


const ProjectsPage: React.FC = () => {
    return (
        <section id="projects" className='min-h-screen flex flex-col justify-center items-center'>
            <h1 className='flex justify-center text-gray-300 text-3xl font-bold p-8'>Projects</h1>
            <div className="flex flex-wrap justify-center gap-4 xl:px-64">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        skills={project.skills}
                        description={project.description}
                        isClosedSource={project.isClosedSource}
                        sourceUrl={project.sourceUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;