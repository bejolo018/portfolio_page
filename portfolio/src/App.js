import React, { Component } from 'react'
import Projects from './Components/Projects'
// import Footer from './Components/Footer'
import Home from './Views/Home'
import ContactMe from './Components/ContactMe'

class App extends Component {
  state = {
    projects:[
      {
        id: 1,
        title: 'DevFindr',
        description: 'This App Allows you to connect entrepreneurs ideas with capable developers to craft their ideas into professional applications.',
        link: 'https://brave-ardinghelli-f8e8c7.netlify.app/',
        github: 'https://github.com/labs14-build-my-app',
        image: "./Assets/devfindr.png"
      },

      {
        id: 2,
        title: 'Haunted House MUD',
        description: 'A Multi-User Dungeon game with a haunted house theme!',
        link: 'https://haunted-house.netlify.app/',
        github: 'https://github.com/CS22-Team-2-haunted-house',
        image: "./Assets/hhmud.png"
      },

      {
        id: 3,
        title: 'MERN Movie Watchlist',
        description: 'Simple application with authentication that allows you to sign in and add and remove list items to database.',
        link: 'https://sheltered-cliffs-70979.herokuapp.com/',
        github: 'https://github.com/bejolo018/mern_movie_watchlist',
        image: "./Assets/mernmovie.png"
      }
    ]
  }

render(){
  return (
    <div className="relative pb-10 min-h-screen sm:max-w-xs">      
      <div>
          <Home />
          <Projects projects={this.state.projects}/>
          <div className='mt-10' style={{textAlign: "center"}} >
            <ContactMe />
          </div>
        
      </div>
      {/* <Footer /> */}
  </div>
  )
}
}

export default App;
