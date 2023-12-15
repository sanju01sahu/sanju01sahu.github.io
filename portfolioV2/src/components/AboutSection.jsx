import React, { useState,useEffect } from "react";
import styled from "styled-components";

const helloInLanguages = [
  'Hello',         // English
  'नमस्ते',        // Hindi
  'नमस्कारम्',     // Sanskrit
  'வணக்கம்',      // Tamil
  'Hola',           // Spanish
  '你好',             // Mandarin (Chinese)
  'こんにちは',       // Japanese
  'Привет',         // Russian
  'Bonjour',        // French
  'Hallo',          // German
  'ഹലോ',            // Malayalam
  'Olá',            // Portuguese
  '안녕하세요',        // Korean
];

const AboutSection = () => {
  const [index,setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % helloInLanguages.length);
    }, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  // console.log(index);

  return (
    <DIV>
      <div id="about" className="about section">
        <h2 className="section-heading" >About</h2>
        <div>
          <div>
            <span className="about-hello" >
              {helloInLanguages[index|| 0]}
            </span>
            <p className="about-intro" >
            I am Sanjay Sahu an outcome-driven Full Stack Web Developer. Proficient in MERN stack,
            showing intermediate-level skills in Data Structures and Algorithms.
            Accomplished in both solo and collaborative projects, blending
            technical prowess with effective teamwork. Adept in designing and
            optimizing server-side APIs with Node.js and Express.js, crafting
            responsive web applications using React.js, and proficient in
            MongoDB for efficient database operations.
            </p>
            <span>
              <p></p>
            </span>
          </div>
          <div className="approach" >
            <h2>My Approach To Projects Is</h2>
            <span>
              <h3 className="about-warp1" >Listen</h3>
              <h3 className="about-warp2" >Observe</h3>
              <h3 className="about-warp3" >Understand</h3>
              <h3 className="about-warp3" >Experiment</h3>
              <h3 className="about-warp1" >Glean</h3>
              <h3 className="about-warp2" >Synthesize</h3>
              <h3 className="about-warp1" >Optimize</h3>
            </span>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default AboutSection;

const DIV = styled.div`
  #about {
    width: 98%;
    margin: auto;
    background-color: #f1f1f1;
    padding: 100px 0px;
    font-size:20px;
    
  }
  #about div{
    width:80%;
    margin:auto;
    justify-content:space-evenly;
    display: flex;
    flex-direction: row;
  }

  #about div div{
    display: flex;
    flex-direction: column;
  }

  .approach{
    text-align: center;
  }
  .approach span h3 {
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
  }

  @media screen and (max-width: 600px) {
    #about {
    }
  

    #about div{
      width:90%;
      flex-direction: column;
      margin-bottom:30px;
    }
  }
`;
