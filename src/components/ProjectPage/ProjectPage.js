import React from 'react';
import './ProjectPage.css';


function ProjectPage(props) {

  const { data } = props;
  const { id } = props.match.params;

  const project = data.find(p => p.id === Number(id));


  return (
       <div id="project-page-container">
           <div></div>
           <div id="center-col-project-page">
              <div id="project-page-text-tech-box">
                <div id="project-page-text">
                  <button onClick={props.history.goBack} className="red-btn">Back</button>
                  <h1 id="project-page-h1">{ project.project_name }</h1>
                  <p className="para-sections">{ project.description }</p>
                </div>

                <div id="project-page-technologies">
                  <h4 id="tech-h4">Technologies</h4>
                  <ul id="tech-ul">
                    {
                      project.technologies.map(t => <li>{t}</li>)
                    }
                  </ul>
                  {
                    project.live_link ?
                      <a href={ project.live_link } target="_blank" rel="noopener noreferrer"><button className="red-btn tech-btn">Live Demo</button></a>
                                      : null
                  }
                  <a href={ project.github_link } target="_blank" rel="noopener noreferrer"><button className="red-btn tech-btn">GitHub Repo</button></a>

                </div>
              </div>

              <div id="project-page-images">
                  {
                    project.image_urls.slice(1).map(p =>
                      <div className="container-project-page-img"><img className="project-page-images" src={`${process.env.PUBLIC_URL}${p}`} alt="project" /></div>
                    )
                  }

              </div>

           </div>
           <div></div>
       </div>
  );
}

export default ProjectPage;
