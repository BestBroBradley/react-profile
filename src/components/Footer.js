import React from "react"
import { FooterWrapper } from "../styles"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
       <FooterWrapper>
            <div id="footer">
                <a target="_blank" href="https://github.com/BestBroBradley"><i className="fab fa-linkedin-in fa-3x"></i></a>
                <a target="_blank" href="https://www.linkedin.com/in/allison-bradley-bba219198/"><i className="fab fa-github fa-3x"></i></a>
                <Link to="/" href="https://www.linkedin.com/in/allison-bradley-bba219198/"><i class="fas fa-home fa-3x"></i></Link>
            </div>
        </FooterWrapper>
    )
    }