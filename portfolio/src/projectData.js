import underground from './Assets/underground.png'
import devfindr from './Assets/devfindr.png'
import hhmud from './Assets/hhmud.png'
import mernmovie from './Assets/mernmovie.png'

const projectData =[
    {
      id: 1,
      title: 'DevFindr',
      description: 'This App Allows you to connect entrepreneurs ideas with capable developers to craft their ideas into professional applications.',
      link: 'https://brave-ardinghelli-f8e8c7.netlify.app/',
      github: 'https://github.com/labs14-build-my-app',
      image: devfindr,
      technologies: 'React, Redux, Node, MongoDB, HTML5, CSS3'
    },
    {
      id: 2,
      title: 'The Underground',
      description:'Private room chat application that has messages that can only be read by users in the room when the message is sent, for discreet chatting and privacy.',
      link:'https://optimistic-blackwell-7456bd.netlify.app/',
      github: 'https://github.com/bejolo018/React_ChatApp',
      image: underground,
      technologies: 'React, Node, CSS3, SocketIO, ReactHooks'
    },

    {
      id: 3,
      title: 'Haunted House MUD',
      description: 'A Multi-User Dungeon game with a haunted house theme!',
      link: 'https://haunted-house.netlify.app/',
      github: 'https://github.com/CS22-Team-2-haunted-house',
      image: hhmud,
      technologies: 'React, CSS3, Django'
    },

    {
      id: 4,
      title: 'MERN Movie Watchlist',
      description: 'Simple application with authentication that allows you to sign in and add and remove list items to database.',
      link: 'https://sheltered-cliffs-70979.herokuapp.com/',
      github: 'https://github.com/bejolo018/mern_movie_watchlist',
      image: mernmovie,
      technologies: 'React, Redux, Node, ReactStrap'
    },
  ]

export default projectData