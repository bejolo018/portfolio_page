import React, { Component } from 'react'
import ProjectCard from './ProjectCard';
import PropTypes from 'prop-types';

class Projects extends Component{
    render(){
        return this.props.projects.map((project) => (
            <ProjectCard key={project.id} project = {project} />
        ))
    }
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired

}

export default Projects