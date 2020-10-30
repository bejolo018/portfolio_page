import React, { Component } from 'react'


class ProjectCard extends Component {
    render(){
        return (
            <div className="border mb-4 rounded m-4" style={{color: 'white'}}>
                <div className="p-3">
                    <h3 className="font-bold text-xl mb-3 flex justify-center">
                        {this.props.project.title}
                    </h3>
                <div className="mb-3 flex justify-center">
                    {this.props.project.description}
                </div>
                <div>
                    <img src={this.props.project.image} alt=''/>
                </div>
                <div className="mb-3 mt-3 flex justify-center">
                    Technologies used: {this.props.project.technologies}
                </div>
                <div>
                <a    href={this.props.project.link}
                      className="bg-pink-400 hover:bg-pink-500 text-white p-2 flex justify-center"
                      style={{borderRadius: '20px'}}
                >
                    View App
                </a>
                <a 
                      href={this.props.project.github}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 flex justify-center mt-3"
                      style={{borderRadius: '20px'}}
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