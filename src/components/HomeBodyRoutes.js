import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blogs from './Blogs';
import ProjectList from './ProjectList';

export default function HomeBodyRoutes() {
  return (
    <Switch>
      <Route path='/repositories'>repositories</Route>
      <Route path='/blogs'>
        <Blogs />
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
