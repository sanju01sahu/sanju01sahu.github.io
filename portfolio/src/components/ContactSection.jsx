import React from "react";
import styled from "styled-components";

const ContactSection = () => {
  return (
    <DIV>
      <div id="contact">
        <div>
          <h2>Let's Create things that people love to experience.</h2>
          <p>I design beautiful products that perform better.</p>
          <button className="blue-button">Reach out Now</button>
        </div>
        <div>
          <div className="contact-link">
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
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  color:#9aa5ae;
  font-size:18px;
}

#contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#contact > div {
  margin-bottom: 20px;
  color:#9aa5ae;
  width:98%;
  margin:auto;
  background-color:#031d35;
  display: flex;
}

#contact h2 {
  color: #333; /* Change the color based on your design */
}

#contact p {
  margin-bottom: 20px;
}



#contact-phone,
#contact-email {
  margin-top: 10px;
}

#contact-linkedin,
#contact-github {
  margin-top: 10px;
  display: inline-block;
}

#contact-linkedin img,
#contact-github img {
  width: 40px; /* Adjust the size based on your design */
  height: 40px; /* Adjust the size based on your design */
  margin-bottom:15px;
  margin-right: 10px;
}

.bottom-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
  font-size:20px;
}

.contact-link,
.bottom-footer div{
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
  align-item:center;
  padding:20px
}
@media screen and (max-width: 600px) {
  
}
`





// `
//   #contact{
//     margin-botton:8px;
//   }
//   #contact div {
//     padding: 10px 0px;
//     color:#9aa5ae;
//     width:98%;
//     margin:auto;
//     background-color:#031d35;
//     display: flex;
//     flex-direction: row;
    
//   }
//   #contact div div div{
//     width:60%;
//     margin:auto;
//     align-items:center;
//     display:flex;
//     flex-direction:column;

//   }
//   #contact div div div a{
//     margin: 0px 0px 30px 0px;
//     background-color: #9aa5ae;
//     padding:5px;
//     border-radius:6px;

//   }
//   #contact div div div a img{
//     height:40px;
//   }

  
// `;
