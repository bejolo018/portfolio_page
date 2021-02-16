import React from 'react'
import me from '../Assets/me.png'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { RiGithubLine, RiPagesLine } from 'react-icons/ri'
import Pdf from '../Assets/Resume3.pdf'

function AboutMe() {
    return (
        <div className="fadein" style={{textAlign: "center"}}>
            <div className="font-bold mb-3" style={{fontSize: "70px", color: 'white'}}>Benjamin Lopez</div>
            <img src={me} alt='me' className="m-auto sm:max-w-xsm mb-4 mt-12" style={{borderRadius: '20px'}}/>
            <div className="mt-12 mb-10 text-xl" style={{color: 'white'}}>
            Driven software engineer who loves working with awesome teams on awesome projects.
            </div> 
            <div style={{color: 'white'}}>
                <a className='inline-block m-5' href="https://www.linkedin.com/in/benjaminjohnlopez/"><AiOutlineLinkedin size={50}/> LinkedIn</a>     
                <a className='inline-block m-5' href="https://github.com/bejolo018"><RiGithubLine size={50}/>Github</a> 
                <a className='inline-block m-5' href={Pdf} target="_blank" rel="noopener noreferrer"><RiPagesLine size={50}/>Resume</a> 
            </div>
        </div>
    )
}

export default AboutMe
