import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 relative z-10"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row flex-wrap gap-10 px-4 md:px-10 justify-center items-center">
        {PROJECTS.map((project, index) => (
          <div
            key={project.title}
            className="flex items-center justify-center sm:w-[350px] w-[90vw] min-h-[30rem]"
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              isGlobe={false}
            />
          </div>
        ))}
      </div>

    </section>
  );
};
