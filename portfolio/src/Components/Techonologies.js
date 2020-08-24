import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { DiPostgresql } from 'react-icons/di';

function Techonologies() {
    return (
        <div>
            <IoLogoJavascript size={100}/><div>Javascript</div>
            <FaReact size={100}/><div>React</div> 
            <FaNodeJs size={100}/><div>Node</div> 
            <IoLogoPython size={100}/><div>Python 3</div> 
            <DiPostgresql size={100}/><div>SQL</div> 
            <IoLogoHtml5 size={100} /><div>HTML 5</div> 
            <IoLogoCss3 size={100}/><div>CSS 3</div>
        </div>
    )
}

export default Techonologies
