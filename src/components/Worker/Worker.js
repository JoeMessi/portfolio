import React from 'react';
import './Worker.css';

function Worker() {

  return (
    <div id="worker-container">

       <div></div>
       <div id="center-col-worker">

         <div id="worker-text">

              <h2>As a worker</h2>
              <p className="para-sections">
                I have two years experience working at a digital marketing company
                called <a className="hyper-link" href="https://www.luxusworldwide.com/" target="_blank" rel="noopener noreferrer">Luxus</a>. My key responsibilities were to create web pages using
                HTML, CSS, Javascript and Adobe's content management system. One of the latest projects I worked on was the
                development of the new site for the travel technology company <a className="hyper-link" href="https://amadeus.com" target="_blank" rel="noopener noreferrer">Amadeus</a>.
                The following are two examples of the many pages I helped to create
                using Adobe Experience Manager
              </p>

         </div>
         <div id="project-worker">

             <a href="https://amadeus.com/en/portfolio/airlines/farexpert-filing-platform" target="_blank" rel="noopener noreferrer" className="link-img-box">
               <div className="overlay-box"><h4 className="h4-box">View page</h4></div>
               <div>
                 <img className="student-gallery-img" src={`${process.env.PUBLIC_URL}/images/amadeus.png`} alt="amadues project" />
               </div>
             </a>

             <a href="https://amadeus.com/en/insights/blog/customers-living-growing-live-travel-space" target="_blank" rel="noopener noreferrer" className="link-img-box">
               <div className="overlay-box"><h4 className="h4-box">View page</h4></div>
               <div>
                 <img className="student-gallery-img" src={`${process.env.PUBLIC_URL}/images/amadeus2.png`} alt="amadues project" />
               </div>
             </a>

         </div>

       </div>
       <div></div>

    </div>
  );
}

export default Worker;
