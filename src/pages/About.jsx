import { CTA } from "../components";
import { skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <div className="transform transition duration-500 hover:scale-y-125">
        <h1 className="head-text animate-fadeIn">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            {" "}
            Vipin Kumar
          </span>{" "}
          👋
        </h1>
      </div>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 transform transition duration-500 hover:scale-y-110">
        <p>
          A software engineer is an developer skilled in programming languages,
          problem-solving software development. They are eager to learn, work in
          teams, and contribute to coding projects with a focus on gaining
          hands-on experience and improving technical skills
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text animate-slideUp transform transition duration-500 hover:scale-y-125">
          My Skills
        </h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div
              className={`block-container w-20 h-20 transition-transform transform-gpu hover:scale-110 duration-500 ease-out animate-slideUp delay-${
                index * 100
              }`}
              key={skill.name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA className="animate-fadeIn delay-500" />
    </section>
  );
};

export default About;
