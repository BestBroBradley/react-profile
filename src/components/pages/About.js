import React from "react"
import Me from "../images/me.png"
import { AboutWrapper } from "../../styles"
import { Button } from "../../styles"
import { Link, useLocation } from "react-router-dom"


export const About = () => {
    return (
        <AboutWrapper>
            <div id="profile-image">
                <div id="profile-span">
                    <div className="link">
                        <Link to="/contact" id="contact-btn"><Button>Contact</Button></Link>
                    </div>
                    <div className="link">
                        <Link to="/portfolio" id="port-btn"><Button>Portfolio</Button></Link>
                    </div>
                </div>
                <img src={Me} />
            </div>
            <div id="profile-text">
                <h1>Allison Bradley</h1>
                <h3 id="bio">Full-stack web developer.  Fan of Star Trek and cats.  Ready to talk knitting any day of the week.</h3>
            </div>
        </AboutWrapper>
    )
}