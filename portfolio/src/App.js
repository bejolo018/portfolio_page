import React, { Component } from 'react'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Home from './Views/Home'

class App extends Component {
  state = {
    projects:[
      {
        id: 1,
        title: 'DevFindr',
        github: 'https://github.com/labs14-build-my-app',
        image: "./Assets/devfindr.png"
      }
    ]
  }

render(){
  return (
    <div className="relative pb-10 min-h-screen">      
      <div>
        <Home />
        <Projects projects={this.state.projects}/>
      </div>
      <Footer />
    </div>
  )
}
}

export default App;
