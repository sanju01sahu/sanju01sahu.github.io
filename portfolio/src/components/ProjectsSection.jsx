import React from "react";
import styled from "styled-components";

const projectData = [
  {
    image: "/gemgarden.png",
    title: "GEM GARDEN",
    description:
      "Welcome to GEM GARDEN, your premier destination for exquisite designer jewelry! Our e-commerce website is designed to provide an unparalleled shopping experience for jewelry enthusiasts of all tastes.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJs",
      "Redux",
      "Redux-thunk",
      "JSON Server",
    ],
    github: "https://github.com/sanju01sahu/gem-garden",
    deployed: "https://gem-garden.netlify.app/",
  },
  {
    image: "pepperfry.png",
    title: "Pepper Fry Clone",
    description:
      "An e-commerce web site that is the clone of a furniture oriented store and online store.",
    techStack: ["HTML5", "CSS3", "JavaScript", "JSON Server"],
    github: "https://github.com/sanju01sahu/pepper-fry-clone",
    deployed: "https://whimsical-pudding-762f22.netlify.app/pages/home.html",
  },
];
/**
{
    image:"",
    title:"",
    description:"",
    techStack:[],
    github:"",
    deployed:"",
    
  }
 * 
 */

const ProjectsSection = () => {
  return (
    <DIV>
      <div id="projects">
        <h2>Work Speaks</h2>
        {projectData.map((el, i) => {
          return (
            <div className="project-card">
              <div>
                <img src={el.image} alt="" />
              </div>
              <div>
                <h3 className="project-title">{el.title}</h3>
                <p className="project-description">{el.description}</p>
                <div className="project-tech-stack">
                  <p>TECH Stack: {el.techStack.join(" | ")}</p>
                </div>

                <div>
                  <a href={el.github} className="project-github-link">
                    <button>GitHub Link</button>
                  </a>
                  <a href={el.deployed} className="project-deployed-link">
                    <button>Deploved Link</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DIV>
  );
};

export default ProjectsSection;

const DIV = styled.div`
  #projects{
    
    margin:auto;
  }
`;
