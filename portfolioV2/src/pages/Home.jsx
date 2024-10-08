import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";

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

const handleResume = (e)=>{
  e.preventDefault(); // Prevent the default link behavior
  window.open("https://drive.google.com/file/d/1HL5TwPGeljnXJptNnXpxzutHW-WflIiu/view?usp=sharing", "_blank")
    // Create a temporary link
    let link = document.createElement('a');
    
    // Set the link's attributes
    link.href="/Sanjay Sahu-Resume.pdf"; // Replace with the actual path to your resume PDF
    link.target = '_blank';
    link.download="Sanjay-Sahu-Resume"; // Replace with the desired file name
    
    // Append the link to the document
    document.body.appendChild(link);
    
    // Trigger a click on the link
    link.click();
    
    // Remove the link from the document
    document.body.removeChild(link);
  }
  
  
 

export const Home = () => {

  const [index,setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % helloInLanguages.length);
    }, 2000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  

  return (
    <DIV>
      <div id="home">
        <div>
          <div>
            <h2 id="user-detail-name">{helloInLanguages[index|| 0]} , I am Sanjay Sahu.</h2>
            <p id="user-detail-intro">
            A FullStack WebDeveloper, Creator And Engineer.
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
              <button onClick={handleResume}  id="resume-button-1" className="blue-button">
                Resume
              </button>
            </span>
          </div>
          <div>
            <img className="home-img" src="/profile.jpg" alt="Sanjay Sahu" />
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
  #user-detail-name{
    font-size:38px;
  }
  #user-detail-intro{
    font-size:20px;
  }
  @media screen and (max-width: 600px) {
    #home div {
      width: 90%;
      display: flex;
      flex-direction: column-reverse;
      margin: auto;
      padding: 80px 0px;
      text-align:center;
    }
    
    #user-detail-intro{
      font-size:25px;
    }
  }
`;
