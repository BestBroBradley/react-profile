import React, { useContext } from "react"
import Me from "../images/me.png"
import { AboutWrapper } from "../../styles"
import { Button } from "../../styles"
import { Link } from "react-router-dom"
import { languageContext} from "../../languageContext"


export const About = () => {

    const { state } = useContext(languageContext)

    const { language } = state
    console.log("contact")
    console.log(language)

    const bioEng = "Full-stack web developer with a history in language and education, specializing in the MERN Stack.<br/>Looking to join a cooperative, motivated, and driven team.  Fan of Star Trek and cats.  Ready to talk knitting any day of the week."
    const bioJapan = ""

    return (
        <AboutWrapper>
            <div id="header-mobile">
                <h1>Allison Bradley</h1>
            </div>
            <div id="profile-image">
                <div id="profile-span">
                    <div className="link">
    <Link to="/contact" id="contact-btn"><Button>{language === "USA" ? "Contact" : "お問い合わせ"}</Button></Link>
                    </div>
                    <div className="link">
                        <Link to="/portfolio" id="port-btn"><Button>{language === "USA" ? "Contact" : "プロジェクト"}</Button></Link>
                    </div>
                </div>
                <img alt="The author" src={Me} />
            </div>
            <div id="profile-text">
                <h1 id="header-desktop">Allison Bradley</h1>
                {language === "Japan" ? <h4>ブラッドリー　アリソン</h4> : null}
                <h3 id="bio">Full-stack web developer with a history in language and education, specializing in the MERN Stack.<br/>Looking to join a cooperative, motivated, and driven team.  Fan of Star Trek and cats.  Ready to talk knitting any day of the week.</h3>
            </div>
        </AboutWrapper>
    )
}