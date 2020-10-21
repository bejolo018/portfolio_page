import React, { Component } from 'react'
import Projects from './Components/Projects'
import Home from './Views/Home'
import ContactMe from './Components/ContactMe'
import projectData from './projectData'
import './index.css'

class App extends Component {
  state = {
    projects: projectData
  }

render(){
  return (
    <div className="relative pb-10 min-h-screen sm:max-w-xs">      
      <div>
          <Home />
          <div className="fadein3">
          <Projects projects={this.state.projects}/>
          <div className='mt-10' style={{textAlign: "center"}} >
            <ContactMe />
          </div>
        </div>
      </div>
  </div>
  )
}
}

export default App;
