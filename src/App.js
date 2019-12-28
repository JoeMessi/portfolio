import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import About from './components/About/About';
import Student from './components/Student/Student';
import Worker from './components/Worker/Worker';
import MeReact from './components/MeReact/MeReact';
import Skills from './components/Skills/Skills';
import SayHi from './components/SayHi/SayHi';
import ProjectPage from './components/ProjectPage/ProjectPage';

import { projectsStudent, projectsPersonalReact } from './data.js';


function App() {

  // all projects objs combined in one array
  const data = [...projectsStudent, ...projectsPersonalReact];

  return (
       <div id="container">
                  <Nav />
           <Switch>
              <Route exact path="/" render={() =>
                <>
                  <Header />
                  <About />
                  <Student />
                  <Worker />
                  <MeReact />
                  <Skills />
                  <SayHi />
                </>
              } />

              <Route path="/project/:id" render={({ match, history }) =>
                  <ProjectPage data={data} match={match} history={history} />
              } />

           </Switch>
       </div>
  );
}

export default App;
