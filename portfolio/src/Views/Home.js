import React from 'react'
import Name from '../Components/Name'
import AboutMe from '../Components/AboutMe'
import Technologies from '../Components/Techonologies'



function Home() {
    return (
        <div>
            <div style={{textAlign: "center"}}>
                <Name />
                <AboutMe />
            </div>
            <Technologies />
        </div>
    )
}

export default Home