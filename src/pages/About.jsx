import React from "react";
import { skills } from "../constants";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm Pandian
        <span className="blue-gradient_text font-semibold drop-shadow">
          Arjunan
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Front-end Developer, specializing in technical education through
          hands-on learning and building web application.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="W-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-texxt">Fresher</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Front-end developer with a passion for creating visually appealing
            and accessible user interfaces. Skilled in UI/UX principles and
            proficient in HTML, CSS, and front-end frameworks. Seeking a
            challenging opportunity to utilize my skills and contribute to a
            growing company.
          </p>
        </div>
      </div>
      <hr className="border-slate-200"/>
      <CTA/>
    </section>
  );
};

export default About;
