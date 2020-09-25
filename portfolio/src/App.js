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
        title: 'The Underground',
        description:'Private room chat application that has messages that can only be read by users in the room when the message is sent, for discreet chatting and privacy.',
        link:'https://optimistic-blackwell-7456bd.netlify.app/',
        github: 'https://github.com/bejolo018/React_ChatApp',
        image: '',
        technologies: 'React, Node, CSS3, SocketIO, ReactHooks'
      },

      {
        id: 4,
        title: 'DevFindr',
        description: 'This App Allows you to connect entrepreneurs ideas with capable developers to craft their ideas into professional applications.',
        link: 'https://brave-ardinghelli-f8e8c7.netlify.app/',
        github: 'https://github.com/labs14-build-my-app',
        image: "./Assets/devfindr.png",
        technologies: 'React, Redux, Node, MongoDB, HTML5, CSS3'
      },

      {
        id: 2,
        title: 'Haunted House MUD',
        description: 'A Multi-User Dungeon game with a haunted house theme!',
        link: 'https://haunted-house.netlify.app/',
        github: 'https://github.com/CS22-Team-2-haunted-house',
        image: "./Assets/hhmud.png",
        technologies: 'React, CSS3, Django'
      },

      {
        id: 3,
        title: 'MERN Movie Watchlist',
        description: 'Simple application with authentication that allows you to sign in and add and remove list items to database.',
        link: 'https://sheltered-cliffs-70979.herokuapp.com/',
        github: 'https://github.com/bejolo018/mern_movie_watchlist',
        image: "./Assets/mernmovie.png",
        technologies: 'React, Redux, Node, ReactStrap'
      },
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
