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
  {
    image:"/nyc-school.png",
    title:"NYC School",
    description:"NYC School is a platform for students to which provides academic as well as skill-based learning to the students. Students can either refer to the material being provided or enrol themselves in any of the 58 courses. ",
    techStack:["HTML","CSS","JavaScript", "JSON Server"],
    github:"https://github.com/sanju01sahu/nyc-school",
    deployed:"https://quiet-marshmallow-b4c69a.netlify.app/",
    
  },
  {
    image:"/wise-pay.png",
    title:"Wise Pay",
    description:"A finance sorting website that allows you to calculate your monthly budget.",
    techStack:["TypeScript", "React", "Redux Tookkit", "JSON Server", "HTML", "CSS"],
    github:"https://github.com/sanju01sahu/wise-pay",
    deployed:"https://darling-marigold-462560.netlify.app/",
    
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
      <h2 className="project-heading" >Work Speaks</h2>
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

                <div className="project-link" >
                  <a href={el.github} className="project-github-link">
                    <button className="blue-button" >GitHub Link</button>
                  </a>
                  <a href={el.deployed} className="project-deployed-link">
                    <button className="blue-button" >Deploved Link</button>
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
#projects {
  width: 98%;
  background-color: #f1f1f1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 100px;
  padding-bottom:100px;
}
#projects h2{
  font-size: 200px;
  color: #e8e8e8;
  font-weight: 900;
  text-align: left;
  padding: 0px 0px 0px 100px;
  margin: 0px 0px 0px 0px;
}

.project-card {
  width: 60%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h3.project-title {
    font-size: 1.5rem;
    margin: 10px 0;
  }

  p.project-description {
    font-size: 1rem;
    color: #555;
  }

  .project-tech-stack {
    margin-top: 10px;
  }

  a.project-github-link,
  a.project-deployed-link {
    display: block;
    margin-top: 15px;
    text-align: center;
  }


  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
  }

  .project-link{
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-evenly;
    margin: 20px;
  }
  
}
@media screen and (max-width: 600px) {
  #projects h2{
    font-size: 100px;
    color: #e8e8e8;
    font-weight: 900;
    text-align: left;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
  }
}
`;
