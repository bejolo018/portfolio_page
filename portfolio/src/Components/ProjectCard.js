import React, { Component } from 'react'


class ProjectCard extends Component {
    render(){
        return (
            <div className="border mb-4 rounded overflow-hidden m-4" style={{color: 'white'}}>
                <div className="p-3">
                    <h3 className="font-bold text-xl mb-3">
                        {this.props.project.title}
                    </h3>
                <div className="mb-3">
                    {this.props.project.description}
                </div>
                <div>
                    <img src={this.props.project.image} alt=''/>
                </div>
                <div className="mb-3 mt-3">
                    Technologies used: {this.props.project.technologies}
                </div>
                <div>
                <a href={this.props.project.link}
                      className="bg-pink-400 text-white p-2 flex justify-center"
                >
                    View App
                </a>
                <a href={this.props.project.github}
                      className="bg-blue-500 text-white p-2 flex justify-center mt-3"
                >
                    View Code
                </a>
                </div>
                </div>
            </div>
        )

    }
}


export default ProjectCard 