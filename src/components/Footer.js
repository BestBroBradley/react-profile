import React from "react"
import { FooterWrapper } from "../styles"
import { Link } from "react-router-dom"
import Japan from "./images/japan.png"
import USA from "./images/usa.png"

export const Footer = () => {
    return (
       <FooterWrapper>
            <div id="footer">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/allison-bradley-bba219198/"><i className="fab fa-linkedin-in fa-3x"></i></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/BestBroBradley"><i className="fab fa-github fa-3x"></i></a>
                <a target="_blank" rel="noopener noreferrer" href={`${process.env.PUBLIC_URL}/images/060120.pdf`}><i className="far fa-clipboard fa-3x"></i></a>
                <Link to="/" href="https://www.linkedin.com/in/allison-bradley-bba219198/"><i className="fas fa-home fa-3x"></i></Link>
                <br/>
                <button><img src={USA}/></button>
                <button><img src={Japan}/></button>
            </div>
        </FooterWrapper>
    )
    }