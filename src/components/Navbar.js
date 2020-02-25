import React from "react"
import { HeaderWrapper, Button } from "../styles"
import { Link, useLocation } from "react-router-dom"
import Contact from "./images/contact.png"

export const Navbar = () => {

	return (
		<HeaderWrapper>
			<div id="profile-image">
				<div>
				</div>
				<h1 className="link" id="location">Contact</h1>
				<div id="profile-span">
					<div className="link">
						<Link to="/" id="contact-btn"><Button>About</Button></Link>
					</div>
					<div className="link">
						<Link to="/portfolio" id="port-btn"><Button>Portfolio</Button></Link>
					</div>
				</div>
				<img src={Contact} />
			</div>
		</HeaderWrapper>
	)
}