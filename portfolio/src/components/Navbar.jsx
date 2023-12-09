import React, { useState } from "react";
// import {Box, Flex} from "@chakra-ui/react"
import styled from "styled-components";

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <DIV>
      <div id="nav-menu">
        <div className="logo">
          <p className="logo-name" >
            <span>{"<"}</span>
            <span >SANJAY SAHU</span>
            <span>{">"}</span>
          </p>
          <p className="logo-small">
            <span>{"<"}</span>
            <span >SS</span>
            <span>{">"}</span>
          </p>
        </div>
        <div className="menu" onClick={() => setState(!state)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={state ? "open" : "links"}>
          <a className="nav-link home" href="#home">
            Home
          </a>
          <a className="nav-link about" href="#about">
            About
          </a>
          <a className="nav-link skills" href="#skills">
            Skills
          </a>
          <a className="nav-link projects" href="#projects">
            Projects
          </a>
          <a className="nav-link contact" href="#contact">
            Contacts
          </a>
          <a
            id="resume-link-2"
            target="_blank"
            className="nav-link resume blue-button"
            rel="noreferrer"
            href="/Sanjay Sahu-Resume.pdf"
            download="Sanjay-Sahu-Resume"
          >
            Resume
          </a>
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
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    position: fixed;
    background-color: #ffffff;
    z-index: 100;
    padding: 20px 0px 20px 0px;
  }
  #nav-menu .menu {
    position: absolute;
    top: 12px;
    right: -50px;
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
    padding: 0px 50px 0px 0px;
    margin: 0px 50px 0px -30px;
  }
  #nav-menu > div > a {
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    border-radius: 5px;
    text-transform: uppercase;
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
    font-size: 35px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
  .logo-name {
    color: #9aa5ae;
    font-weight:900;
  }
  .logo-small {
    display: none;
    color: #9aa5ae;
    font-weight:900;
  }
  @media screen and (max-width: 600px) {
    .logo-name{
      display:none;
    }
    .logo-small{
      display:flex;
    }
    #nav-menu {
      flex-direction: column;
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
      margin-top: 20px;
    }
  }
`;
