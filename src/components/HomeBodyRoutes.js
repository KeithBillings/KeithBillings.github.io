import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Articles from './Articles';
import ProjectList from './ProjectList';

export default function HomeBodyRoutes() {
  return (
    <Switch>
      <Route path='/repositories'>repositories</Route>
      <Route path='/articles'>
        <Articles />
      </Route>
      <Route path='/projects'>
        <ProjectList />
      </Route>
      <Route path='/'>
        <ProjectList />
      </Route>
    </Switch>
  );
}
