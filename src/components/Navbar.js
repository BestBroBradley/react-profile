import React from "react"
import Cat from "./images/cat.svg"
import { HeaderWrapper, Button } from "../styles"
import { Link, useLocation } from "react-router-dom"

export const Navbar = () => {

	const location = useLocation()
	console.log(location)

	return (
		<HeaderWrapper>
			<div className="container">
				<div className="page-title">
					<h1>Contact</h1>
				</div>
				{/* <div id="navbar">
					<div id="home-link">
						<Link to="/"><img src={Cat} /></Link>
					</div>
					<div className="link-container">
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
				</div> */}
			</div>
		</HeaderWrapper>
	)
}