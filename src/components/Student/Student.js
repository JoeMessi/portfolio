import React from 'react';
import './Student.css';
import { projectsStudent } from '../../data.js';

function Student() {

  // mapping data projects to boxes
  const mapProjects = projectsStudent.map((p, i) =>
    <a href={`/project/${p.id}`} className="link-img-box" key={i}>
      <div className="overlay-box"><h4 className="h4-box">{ p.project_name }</h4></div>
      <div>
        <img className="student-gallery-img" src={`${process.env.PUBLIC_URL}${p.image_urls[0]}`} alt="student project" />
      </div>
    </a>
  )


  return (
       <div id="student-container">

          <div></div>
          <div id="center-col-student">

            <div id="student-text">


                 <h2>As a student</h2>
                 <p className="para-sections">
                   I studied the Full Stack JavaScript Techdegree program with <a className="hyper-link" href="https://teamtreehouse.com/" target="_blank" rel="noopener noreferrer">Treehouse</a> and
                   these are some of the projects I created during the course
                 </p>


            </div>
            <div id="project-gallery">
              {mapProjects}
            </div>

          </div>
          <div></div>

       </div>
  );
}

export default Student;
