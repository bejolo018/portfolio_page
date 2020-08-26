import React from 'react';
import { FaReact, FaNodeJs, FaJava } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';
import { DiPostgresql, DiMongodb } from 'react-icons/di';
import { SiDjango } from 'react-icons/si'

function Techonologies() {
    return (
        <div className="mb-10 p-3">
            <div>Technologies:</div>
            <div className="flex space-x-4">
                <IoLogoJavascript size={100}/>
                <FaReact size={100}/>
                <FaNodeJs size={100}/>
                <IoLogoPython size={100}/>
                <DiPostgresql size={100}/>
                <IoLogoHtml5 size={100} />
                <IoLogoCss3 size={100}/>
                <FaJava size={100} />
                <DiMongodb size={100} />
                <SiDjango size={100} />
        </div>
            </div>

    )
}

export default Techonologies
