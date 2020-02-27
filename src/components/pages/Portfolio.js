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
                <div id="outer-div">
                    <h1>My Work</h1>
                    <p>Click on the photos below to be redirected.</p>
                    <div className="container">
                        {portfolio.map((project) =>
                            <Card
                                key={project.id}
                                name={project.name}
                                img={project.img}
                                alt={project.alt}
                                href={project.href}
                                repo={project.repo}
                                description={project.description}
                            />
                        )}
                    </div>
                </div>
            </PortfolioWrapper>
        </>
    )
}