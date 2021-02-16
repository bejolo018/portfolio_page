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
    <div>      
          <AboutMe />
          <Technologies />
          <div className='lg:px-56 fadein3'>
            <Projects projects={this.state.projects}/>
          </div>
            <ContactMe />
    </div>
  )
}
}

export default App;
