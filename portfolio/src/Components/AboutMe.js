import React from 'react'
import me from '../Assets/me.png'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { RiGithubLine, RiPagesLine } from 'react-icons/ri'
import Pdf from '../Assets/Resume3.pdf'

function AboutMe() {
    return (
        <div>
            <img src={me} alt='me' className="block m-auto sm:max-w-xsm sm:p-0 mb-4 mt-12" style={{borderRadius: '20px'}}/>

            <div style={{color: 'white'}}>
                <a className='inline-block m-5' href="https://www.linkedin.com/in/benjaminjohnlopez/"><AiOutlineLinkedin size={50}/> LinkedIn</a>     
                <a className='inline-block m-5' href="https://github.com/bejolo018"><RiGithubLine size={50}/>Github</a> 
                <a className='inline-block m-5' href={Pdf} target="_blank" rel="noopener noreferrer"><RiPagesLine size={50}/>Resume</a> 
            </div>
            
            {/* <a href="https://www.figma.com/files/project/11402597/Benjamin's-Design-Portfolio"
               className='block mb-4 text-l hover:underline font-bold'
               style={{color: 'white'}}
            > Design Portfolio</a> */}

            <div className="mb-10 text-xl" style={{color: 'white'}}>
            Driven software engineer
            who loves working on
            and managing awesome
            projects. 
            </div> 

        </div>
    )
}

export default AboutMe
