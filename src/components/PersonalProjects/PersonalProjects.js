import React, { useState, useEffect } from 'react';
import './PersonalProjects.css';
import {
  projectsPersonalReact,
  projectsPersonalVue,
  projectsPersonalSocket } from '../../data.js';


function MeReact() {

  // func that maps projects into card elements
  const mapProjects = (projectData) => {
    return projectData.map((p, i) =>
      <a href={`/project/${p.id}`} className="link-img-box" key={i}>
        <div className="overlay-box azure-overlay"><h4 className="h4-box">{ p.project_name }</h4></div>
        <div>
          <img className="student-gallery-img" src={`${process.env.PUBLIC_URL}${p.image_urls[0]}`} alt="personal project" />
        </div>
      </a>)
  }

   useEffect(() => {
     // IIFE - toggles active to btns
     (() => {
       const btns = document.getElementById('btn-container-personal').children;
       for(let i = 0; i < btns.length; i++) {
         btns[i].addEventListener('click', () => {
           const current = document.getElementsByClassName('active');
           current[0].className = current[0].className.replace('active', '');
           btns[i].className += ' active';
         })
       }
     })();
   }) // useEffect

  // HOOKS PROJECTS STATE
  const [projects, setProjects] = useState(mapProjects(projectsPersonalReact));


  return (
    <div id="me-react-container">

       <div></div>
       <div id="center-col-me-react">

         <div id="me-react-text">
              <h2>Applications I've built using...</h2>
         </div>

            <div id="btn-container-personal">
              <button onClick={(e) => {setProjects(mapProjects(projectsPersonalReact))}} className="red-btn active">React</button>
              <button onClick={(e) => {setProjects(mapProjects(projectsPersonalVue))}} className="red-btn">Vue</button>
              <button onClick={(e) => {setProjects(mapProjects(projectsPersonalSocket))}} className="red-btn">Socket</button>
            </div>

            <div id="project-me-react">
               {projects}
            </div>

       </div>
       <div></div>

    </div>
  );
}

export default MeReact;
