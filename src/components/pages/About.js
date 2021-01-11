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

    const bioEng = `Full-stack web developer with a history in language and education, specializing in Mongo and React.  Looking to join a collaborative, motivated, and creative team.  Fan of Star Trek and cats.  Ready to talk knitting any day of the week.`

    const bioJapan = `私は言語と教育の学歴でモンゴとリアクトを専門してるのフルスタックのデベロッパーです。協同なやる気があるのクリエチブなチームに参加したいんです。スタートレックと猫の大ファンで、編み物についていつでも話し合ったら嬉しです。`

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
                        <Link to="/portfolio" id="port-btn"><Button>{language === "USA" ? "Portfolio" : "プロジェクト"}</Button></Link>
                    </div>
                </div>
                <img alt="The author" src={Me} />
            </div>
            <div id="profile-text">
                <h1 id="header-desktop">Allison Bradley</h1>
                {language === "Japan" ? <h4>ブラッドリー　アリソン</h4> : null}
    <h3 id="bio">{language === "USA" ? bioEng : bioJapan}</h3>
            </div>
        </AboutWrapper>
    )
}