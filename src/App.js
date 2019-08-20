import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import ShortText from './components/ShortText';
import WorksStudent from './components/WorksStudent';
import WorksWorker from './components/WorksWorker';
import AnotherShortText from './components/AnotherShortText';
import PersonalProjects from './components/PersonalProjects';
import Skills from './components/Skills';
import About from './components/About';
import SayHi from './components/SayHi';
import WorkDetails from './components/WorkDetails';
import projects from './data';


export default class App extends Component {

  constructor(props) {
    super(props)

    this.jRef = React.createRef();
    this.studentRef = React.createRef();
    this.workerRef = React.createRef();
    this.aboutRef = React.createRef();
    this.sayHiRef = React.createRef();

  }

  // anchor scrolling helper func
  scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }


// document.getElementById("button").addEventListener('click', () => {
//   scrollTo(document.getElementById("8"));
// });


  render() {
    return (
          <div>
            <NavBar
              scrollTo={this.scrollTo}
              jRef={this.jRef}
              studentRef={this.studentRef}
              workerRef={this.workerRef}
              aboutRef={this.aboutRef}
              sayHiRef={this.sayHiRef}
            />
            <Route exact path="/" render={() =>
              <div>
                <Header scrollTo={this.scrollTo} jRef={this.jRef}/>
                <ShortText />
                <WorksStudent studentRef={this.studentRef} />
                <WorksWorker workerRef={this.workerRef} />
                <AnotherShortText />
                <PersonalProjects />
                <Skills />
                <About aboutRef={this.aboutRef} />
                <SayHi sayHiRef={this.sayHiRef} />
              </div>
            }/>
            <Route path="/projects/:id" render={({match})=> <WorkDetails  data={projects} match={match}/>
            } />
          </div>
    );
  }

}
