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
            <div className="font-bold p-3 mb-10" style={{textAlign: "center", color: 'white'}}>Technologies:</div>
            <div>
                <div className="flex justify-center space-x-8" style={{color: 'white'}}>
                    <IoLogoHtml5 size={75}/> 
                    <IoLogoCss3 size={75}/>
                    <IoLogoJavascript size={75}/>
                    <FaReact size={75}/>
                    <FaNodeJs size={75}/>
                </div>
                <div className="flex justify-center space-x-8 mt-8" style={{color: 'white'}}>
                    <DiPostgresql size={75}/>
                    <DiMongodb size={75} />
                    <IoLogoPython size={75}/>
                    <SiDjango size={75} />
                    <FaJava size={75} />
                </div>
            </div>

        <div className="mt-10 pointer hover:underline"style={{textAlign: "center", color: 'white'}} onClick={toggleMenu}>
            Full List of Technologies  ▼

        </div>
            </div>

    )
}

if(open){
    return (
        <div className="mb-10 p-3">
            <div className="font-bold p-3 mb-10" style={{textAlign: "center", color: 'white'}}>Technologies:</div>
            <div>
                <div className="flex justify-center space-x-8" style={{color: 'white'}}>
                    <IoLogoHtml5 size={75}/> 
                    <IoLogoCss3 size={75}/>
                    <IoLogoJavascript size={75}/>
                    <FaReact size={75}/>
                    <FaNodeJs size={75}/>
                </div>
                <div className="flex justify-center space-x-8 mt-8" style={{color: 'white'}}>
                    <DiPostgresql size={75}/>
                    <DiMongodb size={75} />
                    <IoLogoPython size={75}/>
                    <SiDjango size={75} />
                    <FaJava size={75} />
                </div>
            </div>
        <div className="mt-10 pointer"style={{textAlign: "center", color: 'white'}} onClick={toggleMenu}>
            Full List of Technologies  ▲ 
            <li className="pointer">HTML5</li>
            <li className="pointer">CSS3</li>
            <li className="pointer">Javascript</li>
            <li className="pointer">NodeJS</li>
            <li className="pointer">ReactJS</li>
            <li className="pointer">Redux</li>
            <li className="pointer">ReactHooks</li>
            <li className="pointer">Python</li>
            <li className="pointer">Django</li>
            <li className="pointer">SASS</li>
            <li className="pointer">PostgreSQL</li>
            <li className="pointer">Express</li>
            <li className="pointer">MongoDB</li>
            <li className="pointer">Java</li>
            <li className="pointer">LESS</li>
            <li className="pointer">Tailwind</li>
            <li className="pointer">Bootstrap</li>
            <li className="pointer">ReactStrap</li>
            <li className="pointer">ContextAPI</li>
            <li className="pointer">AJAX</li>
            <li className="pointer">JEST</li>
        </div>
            </div>
    )
}
}

export default Techonologies
