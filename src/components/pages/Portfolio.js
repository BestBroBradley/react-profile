import React from "react"
import { Navbar } from '../Navbar'


export const Portfolio = () => {
    return (
    <>
    <Navbar 
    title="Portfolio"
    primaryLink="/"
    primaryBtn="About"
    secondaryLink="/contact"
    secondaryBtn="Contact"
    />
    <div>
        <h1>portfolio</h1>
    </div>
    </>
    )
}