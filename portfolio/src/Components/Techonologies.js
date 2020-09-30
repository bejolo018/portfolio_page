import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { DiPostgresql, DiMongodb } from 'react-icons/di';
import { SiDjango } from 'react-icons/si'
import '../index.css'
function Techonologies() {
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    if (!open){
    return (
        <div className="mb-10 p-3">
            <div className="font-bold p-3 mb-10" style={{textAlign: "center"}}>Technologies:</div>
            <div className="flex space-x-4 lg:space-x-20 lg:ml-20">
                <IoLogoHtml5 size={100}/> 
                <IoLogoCss3 size={100}/>
                <IoLogoJavascript size={100}/>
                <FaReact size={100}/>
                <FaNodeJs size={100}/>
                <DiPostgresql size={100}/>
                <DiMongodb size={100} />
                <IoLogoPython size={100}/>
                <SiDjango size={100} />
                <FaJava size={100} />
        </div>
        <div className="mt-10 pointer"style={{textAlign: "center"}} onClick={toggleMenu}>
            Full List of Technologies  ▼

        </div>
            </div>

    )
}

if(open){
    return (
        <div className="mb-10 p-3">
            <div className="font-bold p-3 mb-10" style={{textAlign: "center"}}>Technologies:</div>
            <div className="flex space-x-4 lg:space-x-20 lg:ml-20">
                <IoLogoHtml5 size={100}/> 
                <IoLogoCss3 size={100}/>
                <IoLogoJavascript size={100}/>
                <FaReact size={100}/>
                <FaNodeJs size={100}/>
                <DiPostgresql size={100}/>
                <DiMongodb size={100} />
                <IoLogoPython size={100}/>
                <SiDjango size={100} />
                <FaJava size={100} />
        </div>
        <div className="mt-10 pointer"style={{textAlign: "center"}} onClick={toggleMenu}>
            Full List of Technologies  ▲ 
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript</li>
            <li>NodeJS</li>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>ReactHooks</li>
            <li>Python</li>
            <li>Django</li>
            <li>SASS</li>
            <li>PostgreSQL</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Java</li>
            <li>LESS</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
            <li>ReactStrap</li>
            <li>ContextAPI</li>
        </div>
            </div>
    )
}
}

export default Techonologies
