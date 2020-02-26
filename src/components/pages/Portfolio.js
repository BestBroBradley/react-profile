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
                primaryLink="/"
                primaryBtn="About"
                secondaryLink="/contact"
                secondaryBtn="Contact"
            />
            <PortfolioWrapper>
                <div className="card-container">
                    {portfolio.map((project) => 
                    <Card
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                    />
                    )}
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </PortfolioWrapper>
        </>
    )
}