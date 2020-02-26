import React from "react"
import { HeaderWrapper, Button } from "../styles"
import { Link } from "react-router-dom"
import Contact from "./images/contact.png"
import Portfolio from "./images/portfolio.png"

export const Navbar = (props) => {

	return (
		<HeaderWrapper>
			<div id="profile-image">
				<div>
				</div>
	<h1 className="link" id="location">{props.title}</h1>
				<div id="profile-span">
					<div className="link">
	<Link to={props.primaryLink} id="first-btn"><Button>{props.primaryBtn}</Button></Link>
					</div>
					<div className="link">
	<Link to={props.secondaryLink} id="second-btn"><Button>{props.secondaryBtn}</Button></Link>
					</div>
				</div>
				<img alt={props.alt} src={(props.title === "Contact") ? Contact : Portfolio} />
			</div>
		</HeaderWrapper>
	)
}