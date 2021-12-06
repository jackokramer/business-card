import React from 'react'
import headshot from "../imgs/headshot.png"


export default function Header(){
    return(
        <div className="header">
            <img src={headshot} alt="placeholder" className="photo"/>
                <h1 className="name">Jack Kramer</h1>
                    <h4>Frontend Developer</h4>
                    <h5> <a href="jackokramer17.com" className="portfolio">jackkramer-portfolio</a></h5>
                    <a href="mailto:jackokramer17@gmail.com?subject=Mail from Our Site" className="Email"><svg viewBox="0 0 512 512" width="20" fill="#ffffff" title="envelope" className="envelope"/>Email</a>
                    <a href="https://www.linkedin.com/in/jack-kramer17/" className="LinkedIn"> LinkedIn</a>
            </div>
    )
}