import React from 'react';
import './Skills.css';


function Skills() {

  return (
    <div id="skills-container">

       <div></div>
       <div id="center-col-skills">

         <div id="skills-text"><h2>Skills</h2></div>

         <div id="project-skills">
           <div><img src={`${process.env.PUBLIC_URL}/images/js.png`} alt="icon technology" /></div>
           <div><img src={`${process.env.PUBLIC_URL}/images/react.png`} alt="icon technology" /></div>
           <div><img src={`${process.env.PUBLIC_URL}/images/node.png`} alt="icon technology" /></div>
           <div><img src={`${process.env.PUBLIC_URL}/images/express.png`} alt="icon technology" /></div>
           <div><img src={`${process.env.PUBLIC_URL}/images/jquery.png`} alt="icon technology" /></div>
           <div><img src={`${process.env.PUBLIC_URL}/images/api.png`} alt="icon technology" /></div>
           <div id="rboot"><img src={`${process.env.PUBLIC_URL}/images/react-bootstrap.png`} alt="icon technology" /></div>
           <div><img src={`${process.env.PUBLIC_URL}/images/sql.png`} alt="icon technology" /></div>
           <div><img src={`${process.env.PUBLIC_URL}/images/html.png`} alt="icon technology" /></div>
           <div><img src={`${process.env.PUBLIC_URL}/images/css.png`} alt="icon technology" /></div>
         </div>

       </div>
       <div></div>

    </div>
  );
}

export default Skills;
