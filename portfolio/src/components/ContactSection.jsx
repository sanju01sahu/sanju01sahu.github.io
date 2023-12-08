import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <DIV>
      <div id="contact">
        <div>
          <h2>Let's Create</h2>
          <p>I design beautiful products that perform better.</p>
          <button className="blue-button">Reach out Now</button>
        </div>
        <div>
          <div>
            <div>
              <p>The fastest way to get in touch with me</p>
              <h3 id="contact-phone">sanju01.sahu@gmail.com</h3>
              <h3 id="contact-email">+91 7053795808</h3>
            </div>
            <div >
              <a
                id="contact-linkedin"
                href="https://www.linkedin.com/in/sanjay-sahu-452999165/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt=""
                />
              </a>
              <a
                id="contact-github"
                href="https://github.com/sanju01sahu"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/github-logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div>
            <p>©Sanjay Sahu Design Studio | 2023</p>
          </div>
          <div>
            <a rel="noreferrer" href="#">Privacy Policy </a>
            <a rel="noreferrer" href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export default ContactSection;

const DIV = styled.div`
  #contact{
    margin-botton:8px;
  }
  #contact div {
    padding: 10px 0px;
    color:#9aa5ae;
    width:98%;
    margin:auto;
    background-color:#031d35;
    display: flex;
    flex-direction: row;
    
  }
  #contact div div div{
    width:60%;
    margin:auto;
    align-items:center;
    display:flex;
    flex-direction:column;

  }
  #contact div div div a{
    margin: 0px 0px 30px 0px;
    background-color: #9aa5ae;
    padding:5px;
    border-radius:6px;

  }
  #contact div div div a img{
    height:40px;
  }

  
`;
