import React from "react"
import { Navbar } from '../Navbar'
import { PortfolioWrapper } from "../../styles"
import { Card } from "../subcomponents/Card"
import portfolio from "../../data/portfolio.json"

export const Portfolio = () => {
    return (
        <>
            <Navbar
                title="Portfolio"
                secondaryLink="/"
                secondaryBtn="Home"
                primaryLink="/contact"
                primaryBtn="Contact"
                alt="computer and eyeglasses"
            />
            <PortfolioWrapper>
                <div className="container">
                    <h1>My Work</h1>
                    <p>Click on the boxes below to be redirected.</p>
                    {portfolio.map((project) =>
                        <Card
                            key={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                        />
                    )}
                </div>
            </PortfolioWrapper>
        </>
    )
}