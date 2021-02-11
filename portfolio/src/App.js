import React, { Component } from 'react'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import projectData from './projectData'
import './index.css'
import AboutMe from './Components/AboutMe'
import Technologies from './Components/Technologies'

class App extends Component {
  state = {
    projects: projectData
  }

render(){
  return (
    <div className="pb-10 min-h-screen">      
        <div className="fadein" style={{textAlign: "center"}}>
              <AboutMe />
          </div>
        <div className="fadein2" >
              <Technologies />
        </div>
        <div className="fadein3">
          <div className='lg:px-56'>
            <Projects projects={this.state.projects}/>
          </div>
          <div className='mt-10' style={{textAlign: "center"}} >
            <ContactMe />
          </div>
      </div>
  </div>
  )
}
}

export default App;
