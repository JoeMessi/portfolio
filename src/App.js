import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Header from './components/Header';
import WorksStudent from './components/WorksStudent';
import WorksWorker from './components/WorksWorker';
import PersonalProjects from './components/PersonalProjects';
import Skills from './components/Skills';
import About from './components/About';
import SayHi from './components/SayHi';
import WorkDetails from './components/WorkDetails';
import NotFound from './components/NotFound';
import projects from './data';


export default class App extends Component {

  constructor(props) {
    super(props)
    // Refs for anchor links
    this.jRef = React.createRef();
    this.studentRef = React.createRef();
    this.workerRef = React.createRef();
    this.aboutRef = React.createRef();
    this.sayHiRef = React.createRef();

    // initial App state
    this.state = {
      // is WorkDetails component mounted ? (helps functionality for the navigation when WorkDetails is mounted)
      isWorkDetailsCompMounted: null,
      // is NotFound component mounted ? (helps functionality for the navigation when NotFound is mounted)
      isNotFoundCompMounted: null
    }
  }

  // anchor scrolling helper func
  scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }

  // func that will setState on workDetails Component
  handleWorkDetailsCompState = (isShowing) => {
    this.setState({
      isWorkDetailsCompMounted: isShowing
    })
  }

  // func that will setState on NotFound Component
  handleNotFoundCompState = (isShowing) => {
    this.setState({
      isNotFoundCompMounted: isShowing
    })
  }


  render() {
    return (
         <>
            <NavBar
              isWorkDetailsCompMounted={this.state.isWorkDetailsCompMounted}
              isNotFoundCompMounted={this.state.isNotFoundCompMounted}
              scrollTo={this.scrollTo}
              jRef={this.jRef}
              studentRef={this.studentRef}
              workerRef={this.workerRef}
              aboutRef={this.aboutRef}
              sayHiRef={this.sayHiRef}
            />
            <Switch>
                <Route exact path="/" render={() =>
                  <>
                    <Header scrollTo={this.scrollTo} jRef={this.jRef}/>
                    <About aboutRef={this.aboutRef} />
                    <WorksStudent studentRef={this.studentRef} />
                    <WorksWorker workerRef={this.workerRef} />
                    <PersonalProjects />
                    <Skills />
                    <SayHi sayHiRef={this.sayHiRef} />
                  </>
                }/>
                <Route path="/projects/:id" render={({match})=>
                  <WorkDetails
                    handleWorkDetailsCompState={this.handleWorkDetailsCompState}
                    data={projects}
                    match={match}/>
                } />
                <Route render={() => <NotFound handleNotFoundCompState={this.handleNotFoundCompState} /> } />
            </Switch>

         </>
    );
  }

}
