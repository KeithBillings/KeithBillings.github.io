import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import Home from './Pages/Home';
import ProjectPage from './Pages/ProjectPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/aboutme'>
        <AboutMe />
      </Route>
      <Route exact path='/contactme'>
        <ContactMe />
      </Route>
      <Route exact path='/project/:id'>
        <ProjectPage />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  );
}
