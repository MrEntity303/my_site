import skillsData from "@/ui/skills/skillsData";

const Skills = () => {
  return (
    <section id="tech-skills" className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-center p-8">Skills</h1>
      <div className="flex flex-wrap justify-center gap-4 xl:px-64">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-grayCard p-4 rounded-lg w-24 h-24 group hover:bg-white hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center items-center w-10 h-10 group-hover:scale-125 transition-transform duration-300">
              <img src={skill.imgSrc} alt={skill.name} />
            </div>
            <span className="mt-2 text-sm font-medium group-hover:text-black">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;