import React from "react"
import Me from "../images/me.png"
import { AboutWrapper } from "../../styles"
import { Button } from "../../styles"
import { Link } from "react-router-dom"


export const About = () => {
    return (
        <AboutWrapper>
            <div id="header-mobile">
                <h1>Allison Bradley</h1>
            </div>
            <div id="profile-image">
                <div id="profile-span">
                    <div className="link">
                        <Link to="/contact" id="contact-btn"><Button>Contact</Button></Link>
                    </div>
                    <div className="link">
                        <Link to="/portfolio" id="port-btn"><Button>Portfolio</Button></Link>
                    </div>
                </div>
                <img alt="The author" src={Me} />
            </div>
            <div id="profile-text">
                <h1 id="header-desktop">Allison Bradley</h1>
                <h3 id="bio">Full-stack web developer with a history in language and education, specializing in the MERN Stack.  Looking to join a cooperative, motivated, and driven team.  Fan of Star Trek and cats.  Ready to talk knitting any day of the week.</h3>
            </div>
        </AboutWrapper>
    )
}