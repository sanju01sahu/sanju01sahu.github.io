import React from "react";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <DIV>
      <div id="about" className="about section">
        <h2>About</h2>
        <div>
          <div>
            <span>
              <p> </p>
            </span>
            <p>I am Sanjay - A FullStack WebDeveloper, Creator And Engineer</p>
            <span>
              <p></p>
            </span>
          </div>
          <div>
            <p>My Approach Is To</p>
            <span>
              <h3>Listen</h3>
              <h3>Observe</h3>
              <h3>Understand</h3>
              <h3>Experiment</h3>
              <h3>Glean</h3>
              <h3>Synthesize</h3>
              <h3>Optimize</h3>
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
    width:60%;
    margin:auto;
    justify-content:space-evenly;
    display: flex;
    flex-direction: row;
  }
  #about h2 {
    font-size: 200px;
    color: #e8e8e8;
    font-weight: 900;
    text-align: left;
    padding: 0px 0px 0px 100px;
    margin: -80px 0px 0px 0px;
  }

  #about div div{
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    #about {
      margin-left:0px;
    }
    #about h2 {
      font-size: 100px;
      color: #e8e8e8;
      font-weight: 900;
      text-align: left;
      padding: 0px 0px 0px 0px;
      margin: 0px 0px 0px 0px;
    }

    #about div{
      width:90%;
      flex-direction: column;
      margin-bottom:30px;
    }
  }
`;
