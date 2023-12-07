import React from 'react'
import styled from "styled-components";

export const Home = () => {
  return (
    <DIV>
      <div id="home" >
        <div>
            <h2 id="user-detail-name" >Hello, I am Sanjay Sahu.</h2>
            <p></p>
            <p  id="user-detail-intro" >Outcome-driven Full Stack Web Developer. Proficient in MERN stack, showing intermediate-level skills in Data Structures and Algorithms. Accomplished in both solo and collaborative projects, blending technical prowess with effective teamwork. Adept in designing and optimizing server-side APIs with Node.js and Express.js, crafting responsive web applications using React.js, and proficient in MongoDB for efficient database operations.</p>
            <span>
            <a href="#"><img src="#" alt="" /></a>
            <a href="https://sanju01sahu.github.io/"><img src="" alt="" /></a>
            <a href="#"><button id='resume-button-1'  >Resume</button></a>
            </span>
        </div>
        <div>
            
        </div>
        
    </div>
    </DIV>
  )
}

const DIV = styled.div`
  #home div{
    width:80%;
    margin auto;
    display:flex;
    flex-direction:column;
  }
`
