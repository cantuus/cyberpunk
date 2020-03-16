import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import TestPage from './components/TestPage/TestPage'
import { Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App" >
          <Route path='/' exact component={LandingPage} />
          <Route path='/portfolio' exact component={TestPage} />
          <Route path='/projects' exact component={ProjectsPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
