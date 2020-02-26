import React from "react"
// import { ImgWrapper } from "../../styles"
import "../images/budget-buddy.png"
import "../images/weather-app.png"
import "../images/rps-go.png"
import "../images/tabletop-tap.png"
import "../images/employee-manager.png"
import "../images/hamburger-helper.png"

export const Img = (props) => {
    return (
            <>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
            <img alt={props.alt} src=""/>
            </a>
            </>
    )
}