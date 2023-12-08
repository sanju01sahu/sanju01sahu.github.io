import React from "react";
import styled from "styled-components";

export const Home = () => {
  return (
    <DIV>
      <div id="home">
        <div>
          <div>
            <h2 id="user-detail-name">Hello, I am Sanjay Sahu.</h2>
            <p></p>
            <p id="user-detail-intro">
              Outcome-driven Full Stack Web Developer. Proficient in MERN stack,
              showing intermediate-level skills in Data Structures and
              Algorithms.
            </p>
            <span>
            <a
                href="https://www.linkedin.com/in/sanjay-sahu-452999165/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt=""
                />
              </a>
              <a href="https://github.com/sanju01sahu" target="_blank" rel="noreferrer" >
                <img src="/github-logo.png" alt="" />
              </a>
              <a rel="noreferrer" href="#">
                <button id="resume-button-1" className="blue-button" >Resume</button>
              </a>
            </span>
          </div>
          <div>
            <img class="home-img" src="/profile.jpg" alt="Sanjay Sahu" />
          </div>
        </div>
      </div>
    </DIV>
  );
};
/**
 * 
            Outcome-driven Full Stack Web Developer. Proficient in MERN stack,
            showing intermediate-level skills in Data Structures and Algorithms.
            Accomplished in both solo and collaborative projects, blending
            technical prowess with effective teamwork. Adept in designing and
            optimizing server-side APIs with Node.js and Express.js, crafting
            responsive web applications using React.js, and proficient in
            MongoDB for efficient database operations.
 * 
 */
const DIV = styled.div`
  #home{
    padding: 70px 0px;
  }
  #home div {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    padding: 80px 50px;
  }
  #home div div {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  #home div div span{
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 35px 0px;

  }
  #home div div span a img{
    
    height:40px;
  }

  .home-img {
    border-radius: 1160px 1000px;
  }
`;
