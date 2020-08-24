import React from 'react'
import me from '../Assets/me.jpg'

function AboutMe() {
    return (
        <div>
            <img src={me} className="block m-auto sm:max-w-full sm:p-0" style={{maxWidth: "450px"}}/>

            <div className="mb-10">
            Driven software engineer
            who loves working on
            and managing awesome
            projects. Self-directed
            and motivated to
            providing the best
            experience possible and
            working at peak
            efficiency.    
            </div>    
        </div>
    )
}

export default AboutMe
