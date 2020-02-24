import React from "react"
import Cat from "./images/cat.svg"
import { HeaderWrapper, Button } from "../styles"
import { Link, useLocation } from "react-router-dom"

export const Navbar = () => {

	const location = useLocation()

	return (
		<HeaderWrapper>
			<div id="navbar" className="container">
				<div id="home-link">
					<Link to="/"><img src={Cat}/></Link>
				</div>
				<div className="link">
					<Link to="/contact"><Button>Contact</Button></Link>
				</div>
				<div className="link">
					<Link to="/about"><Button>About</Button></Link>
				</div>
				<div className="link">
					<Link to="/portfolio"><Button>Portfolio</Button></Link>
				</div>
			</div>
		</HeaderWrapper>
	)
}