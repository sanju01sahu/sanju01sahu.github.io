import React from "react";
// import {Box, Flex} from "@chakra-ui/react"
import styled from "styled-components";

const Navbar = () => {
  return (
    <DIV>
      <div id="nav-menu">
        <div>
          <img src="" alt="" />
        </div>
        <div>
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
      <a id="resume-button-2" target="_blank" className="nav-link resume blue-button" rel="noreferrer" href="https://drive.google.com/file/d/1RiNLbw8ekyplWb2yE_PmwHo96-KdeREM/view">
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
    height: 80px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    position: fixed;
    background-color: #ffffff;

  }
  #nav-menu > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
    width: 90%;
    height: 80px;
    padding: 0px 50px 0px 0px;
    margin: 0px 50px 0px -30px;
  }
  #nav-menu > div > a{
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    border-radius: 5px;
    text-transform:uppercase;
    
  }

  #nav-menu > div > a:hover {
    background-color: #f6f6f6;
    color: black;
  }
  
  #nav-menu > div>  a.active {
    background-color: #04AA6D;
    color: white;
  }

  
`
