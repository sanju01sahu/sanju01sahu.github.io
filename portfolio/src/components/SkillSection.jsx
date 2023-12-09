import React from "react";
import styled from "styled-components";

let data = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSftpyvOickntVa0T_ndxWe5rS5iPP6O7v5JQ&usqp=CAU",
    name: "HTML 5",
  },
  {
    src: "https://icon-library.com/images/css3-icon/css3-icon-6.jpg",
    name: "CSS 3",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrp1QpQ8dSnMkof1qDRlrOJ25PBNlEVg-EFg&usqp=CAU",
    name: "JavaScript",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfswYDvaQxO2CBPZAehktn6KK1o2RoPCjVuQ&usqp=CAU",
    name: "React Js",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYl5GeHPqcOqJHBHfUv3oWo00pcTMbGLXWIw&usqp=CAU",
    name: "Redux",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrXjckwvuYvbgBisgfgOtpRYaD71l8gg8-dQ&usqp=CAU",
    name: "NodeJs",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEjCQNyD3_JGsmTZ1Ng0a3WefsXra98wzCw&usqp=CAU",
    name: "Express Js",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiJ_y8kTFn2mCvDWhYHaHqRHphHVToQHM97w&usqp=CAU",
    name: "Mongo Db",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogteZBTlY9fl_S5DbZBj5W_3vxSjmhCs6kQ&usqp=CAU",
    name: "TypeScript",
  },
  {
    src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    name: "Git",
  },
  {
    src: "https://pbs.twimg.com/profile_images/1512090708181725184/KAPAXmDg_400x400.jpg",
    name: "Cypress",
  },
  {
    src: "https://img.icons8.com/color/70/null/chakra-ui.png",
    name: "Chakra Ui",
  },
  {
    src: "https://akhtarfaizan20.github.io/static/media/database.24991eee32623f453b1c.png",
    name: "Data Structure & Algo",
  },
  {
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    name: "Postman",
  },
];

const SkillSection = () => {
  return (
    <DIV>
      <div className="skill-container">
      <h2>Tech Stack & Tools</h2>
        <div id="skills">
          {data.map((el, i) => {
            return (
              <div className="skills-card" key={i}>
                <div className="skills-card-img">
                  <img src={el.src} alt={el.name} />
                </div>
                <div className="skills-card-name"></div>
                <p>{el.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </DIV>
  );
};

export default SkillSection;

const DIV = styled.div`

  .skill-container{
    width:95%;
    margin:auto;
    font-size:20px;
  }
  #skills {
    width: 80%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .skills-card {
    border: 1px solid white;
    border-radius: 15px;
    padding: 15px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
  .skills-card-img img {
    align-items: center;
    height: 100px;
    
  }

  @media screen and (max-width: 600px) {
    #skills {
      width: 80%;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;
