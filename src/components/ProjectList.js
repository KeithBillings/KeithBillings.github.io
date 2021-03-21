import { Grid } from '@material-ui/core';
import React from 'react';
import ProjectCard from './ProjectCard';
import projectListData from '../data/projectListData';

export default function ProjectList() {
  return (
    <Grid container spacing={3}>
      {projectListData.map((project, index) => {
        return <ProjectCard data={project} key={index} id={index} />;
      })}
    </Grid>
  );
}
