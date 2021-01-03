import React, { useContext } from "react"
import { Navbar } from '../Navbar'
import { ContactWrapper, Button } from "../../styles"
import { languageContext } from "../../languageContext"

export const Contact = () => {

    const { state } = useContext(languageContext)

    const { language } = state
    console.log("contact")
    console.log(language)

    const subheaderEng = "Feel free to reach out with any inquiries using the form below, or directly at allison.bradley@outlook.com."
    const subheaderJapan = "私に聞きたい質問があるや連絡したいばい、下にあるフォームを自由に使って下さい。"

    return (
        <>
            <Navbar
                title={language === "USA" ? "Contact" : "お問い合わせ"}
                secondaryLink="/"
                secondaryBtn={language === "USA" ? "Home" : "ホーム"}
                primaryLink="/portfolio"
                primaryBtn={language === "USA" ? "Portfolio" : "プロジェクト"}
                alt="telephone"
            />
            <ContactWrapper>
                <div className="container">
                    <div id="contact-details">
                        <h1>Contact Me</h1>
                        <p>{language === "USA" ? subheaderEng : subheaderJapan}</p>
                        <div id="email-form">
                            <form action="https://formspree.io/xeqkggzj" method="POST">
                                <div className="form-field">
                                    <label htmlFor="name">{language === "USA" ? "Name" : "ネーム"}:</label>
                                    <input type="text" name="name" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="phone">{language === "USA" ? "Phone (optional)" : "電話番号（入れなくてもいいです。）"}:</label>
                                    <input type="text" name="phone" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="email">{language === "USA" ? "Email" : "メール"}:</label>
                                    <input type="text" name="email" />
                                </div>
                                <div className="form-field">
                                    <label htmlFor="message">{language === "USA" ? "Message" : "メッセージ"}:</label>
                                    <textarea rows="7" type="message" name="email" />
                                </div>
                                <Button id="submit-btn" type="submit">{language === "USA" ? "Submit" : "提出"}</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </ContactWrapper>
        </>
    )
}