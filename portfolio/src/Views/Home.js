import React from 'react'
import Name from '../Components/Name'
import AboutMe from '../Components/AboutMe'
import Technologies from '../Components/Techonologies'
import ProjectCard from '../Components/ProjectCard'

function Home() {
    return (
        <div>
            <Name />
            <AboutMe />
            <Technologies />
            <ProjectCard />
        </div>
    )
}

export default Home