import React, { useContext } from "react"
import { Navbar } from '../Navbar'
import { PortfolioWrapper } from "../../styles"
import { Card } from "../subcomponents/Card"
import portfolio from "../../data/portfolio.json"
import { languageContext } from "../../languageContext.js"

export const Portfolio = () => {

    const { state } = useContext(languageContext)

    const { language } = state
    console.log("contact")
    console.log(language)

    const subheaderEng = "Click on the photos below to be redirected."
    const subheaderJapan = "格プロジェクトを見るために、下にあるイメージをクリックして下さい。"

    return (
        <>
            <Navbar
                title={language === "USA" ? "Portfolio" : "プロジェクト"}
                secondaryLink="/"
                secondaryBtn={language === "USA" ? "Home" : "ホーム"}
                primaryLink="/contact"
                primaryBtn={language === "USA" ? "Contact" : "お問い合わせ"}
                alt="computer and eyeglasses"
            />
            <PortfolioWrapper>
                <div id="outer-div">
                    <h1>My Work</h1>
                    <p>{language === "USA" ? subheaderEng : subheaderJapan}</p>
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