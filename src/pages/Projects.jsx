import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <div className="transform transition duration-500 hover:scale-y-125">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>
      </div>

      <p className="text-slate-500 mt-2 leading-relaxed transform transition duration-500 hover:scale-y-110">
        This web project is a dynamic, responsive application built using the
        MERN stack and Full Stack(MongoDB, Express, React, Node.js). It features
        a user-friendly interface, secure authentication, and real-time data
        handling. The project showcases CRUD operations, API integration, and
        state management through React, highlighting best practices in
        full-stack web development. It demonstrates proficiency in front-end
        design, back-end logic, and database interactions, making it a
        comprehensive example of modern web application development.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div
            className="lg:w-[400px] w-full transform transition duration-500 hover:scale-105"
            key={project.name}
          >
            <div className="block-container w-12 h-12 relative group">
              <div
                className={`btn-back rounded-xl ${project.theme} group-hover:animate-ping`}
              />
              <div className="btn-front rounded-xl flex justify-center items-center transition-transform transform group-hover:rotate-12 duration-300 ease-out">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain transition-transform transform hover:translate-x-1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
