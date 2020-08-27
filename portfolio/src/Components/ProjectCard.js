import React, { Component } from 'react'


class ProjectCard extends Component {
    render(){
        return (
            <div className="border border-black mb-4 rounded overflow-hidden ">
                {/* ADD IMAGE FUNCTIONALITY TO PROJECT CARDS HERE*/}
                {/* <div
                    style={{
                        'backgroundImage': `url('${this.props.project.image}')`                    
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div> */}
                
                <div className="p-3">
                    <h3 className="font-bold text-xl mb-3">
                        {this.props.project.title}
                    </h3>
                <div className="mb-3">
                    {this.props.project.description}
                </div>
                <div>
                <a href={this.props.project.link}
                      className="bg-green-500 text-white p-2 flex justify-center"
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