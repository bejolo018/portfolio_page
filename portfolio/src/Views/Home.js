import React from 'react'
import Name from '../Components/Name'
import AboutMe from '../Components/AboutMe'
import Technologies from '../Components/Techonologies'



function Home() {
    return (
        <div>
            <div className="fadein" style={{textAlign: "center"}}>
                <Name />
                <AboutMe />
            </div>
            <div className="fadein2" >
                <Technologies/>
            </div>
        </div>
    )
}

export default Home