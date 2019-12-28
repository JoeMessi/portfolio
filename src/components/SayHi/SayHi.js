import React from 'react';
import './SayHi.css';

function SayHi() {

  return (
    <div id="sayhi-container">

    <div></div>
    <div id="center-col-sayhi">

      <div id="sayhi-text"><h2>Say Hi</h2></div>

      <div id="project-sayhi">

        <form id="my-form" action="https://formspree.io/joe91messina@gmail.com" method="POST">
          <div className="form-row">
              <div className="form-group">
                <input type="text" name="first-name" placeholder="First Name" required />
              </div>

              <div className="form-group">
                <input type="text" name="last-name" placeholder="Last Name" />
              </div>
          </div>


          <div className="form-group">
            <input type="email" name="email" placeholder="Enter email" required />
          </div>

          <div className="form-group">
              <textarea name="comment" form="my-form" rows="5" required></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="red-btn">Submit</button>
          </div>
        </form>

      </div>

    </div>
    <div></div>

    </div>
  );
}

export default SayHi;
