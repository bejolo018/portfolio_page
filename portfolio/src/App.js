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
    <div className="pb-10 min-h-screen">      
      <div>
          <Home />
          <div className="fadein3">

            <div className='lg:px-32'>
              <Projects projects={this.state.projects}/>
            </div>

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
