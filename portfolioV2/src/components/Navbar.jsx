import React, { useState } from "react";
// import {Box, Flex} from "@chakra-ui/react"
import styled from "styled-components";



const Navbar = () => {
  const [state, setState] = useState(false);

  // window.onscroll= setState(false);

  const handleResume = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.open("https://drive.google.com/file/d/1RiNLbw8ekyplWb2yE_PmwHo96-KdeREM/view?usp=drive_link", "_blank")
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
  };

  return (
    <DIV>
      <div id="nav-menu">
        <div className="logo">
          <p>
            <span className="logo-name">
              {"<"} SANJAY SAHU {">"}
            </span>
            
          </p>
        </div>
        <div className="menu" onClick={() => setState(!state)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={state ? "open" : "links"}>
          <a
            className="nav-link home"
            onClick={() => setState(false)}
            href="#home"
          >
            Home
          </a>
          <a
            className="nav-link about"
            onClick={() => setState(false)}
            href="#about"
          >
            About
          </a>
          <a
            className="nav-link skills"
            onClick={() => setState(false)}
            href="#skill-container"
          >
            Skills
          </a>
          <a
            className="nav-link projects"
            onClick={() => setState(false)}
            href="#projects"
          >
            Projects
          </a>
          <a
            className="nav-link contact"
            onClick={() => setState(false)}
            href="#contact"
          >
            Contacts
          </a>
          <button
            onClick={handleResume}
            id="resume-button-2"
            className="nav-link resume blue-button"
          >
            Resume
          </button>
        </div>
      </div>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.div`
  #nav-menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    position: fixed;
    background-color: #ffffff;
    z-index: 100;
    
  }
  #nav-menu .menu {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 37px;
    height: 25px;
  }
  #nav-menu .menu span {
    height: 5px;
    width: 30px;
    background-color: #9aa5ae;
  }

  #nav-menu > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width: 90%;
    padding: 0px 0px 0px 0px;
  }
  #nav-menu > div > a {
    padding: 15px 20px;
    text-decoration: none;
    font-size: 25px;
    border-radius: 5px;
    color: #a6a4a4;
    text-transform: uppercase;
    font-weight: 600;
  }

  #nav-menu > div > a:hover {
    background-color: #f6f6f6;
    color: black;
  }

  #nav-menu > div > a.active {
    background-color: #04aa6d;
    color: white;
  }

  .logo {
    width: 40% !important;
    font-size: 35px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
  
  .logo-name {
    color: #a6a4a4;
    font-weight: 900;
  }
  
  @media screen and (max-width: 1150px) {
    #nav-menu > div > a {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1050px) {
    .logo {
      margin: 0px;
    }
    #nav-menu .links {
      display: none;
    }
    

    #nav-menu .open {
      display: flex !important;
      flex-direction: column !important;
      position:absolute;
      top:130px;
      background-color: #031d35;
      padding-bottom:30px;
      width:40%;
      right: 1px;
      border-radius: 0px 0px 0px 48px;
    }
    #nav-menu .menu {
      display: flex;
    }
    
    
  }

  @media screen and (max-width: 600px) {
    
    #nav-menu .menu{
      display:flex;
    }
    #nav-menu .links {
      display: none;
    }

    #nav-menu .open {
      display: flex !important;
      flex-direction: column !important;
    }
    #nav-menu .menu {
      display: flex;
      align-items: center;
    }
    #nav-menu div a{
      font-size:25px;
    }
    #nav-menu > div > a:hover {
      background-color: #f6f6f6;
      color: black;
    }
  }
`;
