import React from 'react';
import './Nav.css';

const Nav = () => {

  const handleToggle = () => {
    const ul = document.getElementById("nav-ul");
    ul.style.display = 'block';
    const lis = document.getElementsByClassName("nav-lis");

    if(ul.style.height === '0vh') {
        ul.style.height = '100vh';
        ul.style.animation = 'smoothClosing 0.4s forwards';

        for(let i = 0; i < lis.length; i++) {
          lis[i].style.animation = 'lisClose 0.4s forwards';
        }
    }else{
        ul.style.height = '0vh';
        ul.style.animation = 'smoothOpening 0.4s forwards';
        for(let i = 0; i < lis.length; i++) {
          lis[i].style.animation = 'lisOpen 0.4s forwards';
        }
    }
  }


  return (
           <div id="nav">
               <div id="website-name"><a id="jm-icon-link" href="/#">jM</a></div>
               <span onClick={handleToggle} style={{cursor:'pointer'}}>
                  <div id="icon"><i className="fas fa-bars fa-lg"></i></div>
               </span>
               <ul id="nav-ul">
                  <li className="nav-lis" onClick={handleToggle}><a href="/#about-container">About</a></li>
                  <li className="nav-lis" onClick={handleToggle}><a href="/#student-container">As a student</a></li>
                  <li className="nav-lis" onClick={handleToggle}><a href="/#worker-container">As a worker</a></li>
                  <li className="nav-lis" onClick={handleToggle}><a href="/#sayhi-container">Say hi</a></li>
               </ul>
           </div>
  );
}

export default Nav;
