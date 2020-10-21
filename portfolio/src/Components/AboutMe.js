import React from 'react'
import me from '../Assets/me.jpg'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { RiGithubLine, RiPagesLine } from 'react-icons/ri'
import Pdf from '../Assets/Resume3.pdf'
function AboutMe() {
    return (
        <div>
            <img src={me} alt='me' className="block m-auto sm:max-w-full sm:p-0 mb-4 mt-12" style={{maxWidth: "400px", borderRadius: '20px'}}/>
            <div style={{color: 'white'}}>
                <a className='inline-block mb-5' href="https://www.linkedin.com/in/benjaminjohnlopez/"><AiOutlineLinkedin size={50}/></a>     
                <a className='inline-block mb-5' href="https://github.com/bejolo018"><RiGithubLine size={50}/></a> 
                <a className='inline-block mb-5' href={Pdf} target="_blank" rel="noopener noreferrer"><RiPagesLine size={50}/></a> 
            </div>

            <div className="mb-10 text-xl" style={{color: 'white'}}>
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
