import React, { Component } from 'react'

class ProjectCard extends Component {
    render(){
        return (
            <div className="border mb-4 rounded overflow-hidden ">
                
                <div
                    style={{
                        'backgroundImage': `url('')`                    
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
                
                <div className="p-3">
                    <h3 className="font-bold text-xl mb-3">
                        {this.props.project.title}
                    </h3>
                <div className="font-bold mb-3">
                    description
                </div>
                <div>
                <div /*to ={`/products/${props.product.id}`}*/
                      className="bg-blue-500 text-white p-2 flex justify-center"
                >
                    View
                </div>
                </div>
                </div>
            </div>
        )

    }
}


export default ProjectCard 