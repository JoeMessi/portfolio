import React from 'react';
import './MeReact.css';
import { projectsPersonalReact } from '../../data.js';

function MeReact() {

  const mapProjects = projectsPersonalReact.map((p, i) =>
    <a href={`/project/${p.id}`} className="link-img-box" key={i}>
      <div className="overlay-box"><h4 className="h4-box">{ p.project_name }</h4></div>
      <div>
        <img className="student-gallery-img" src={`${process.env.PUBLIC_URL}${p.image_urls[0]}`} alt="react project" />
      </div>
    </a>
  )


  return (
    <div id="me-react-container">

       <div></div>
       <div id="center-col-me-react">

         <div id="me-react-text">


              <h2>Me and React</h2>
              <p className="para-sections">
                 I love JavaScript and everything that comes with it,
                 especially React. These are some of the personal projects
                 I have built using this powerful library
              </p>


         </div>
         <div id="project-me-react">

            {mapProjects}

         </div>

       </div>
       <div></div>

    </div>
  );
}

export default MeReact;
