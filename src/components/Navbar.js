import React from "react"
import { HeaderWrapper } from "../styles"
import { Link, useLocation } from "react-router-dom"

export const Navbar = () => {

    const location = useLocation()

    return (
    <HeaderWrapper>
        <div className="container">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
        </div>
    </HeaderWrapper>
    )
}