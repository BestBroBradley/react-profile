import React, { useContext } from "react"
import { Navbar } from '../Navbar'
import { ContactWrapper, Button } from "../../styles"
import { languageContext } from "../../languageContext"

export const Contact = () => {

    const { state } = useContext(languageContext)

    const { language } = state
    console.log("contact")
    console.log(language)

    return (
        <>
            <Navbar
                title={language === "USA" ? "Contact" : "お問い合わせ"}
                secondaryLink="/"
                secondaryBtn={language === "USA" ? "Home" : "ホーム"}
                primaryLink="/portfolio"
                primaryBtn={language === "USA" ? "Contact" : "プロジェクト"}
                alt="telephone"
            />
            <ContactWrapper>
                <div className="container">
                    <div id="contact-details">
                        <h1>Contact Me</h1>
                            <p>Feel free to reach out with any inquiries using the form below, or directly at allison.bradley@outlook.com.</p>
                        <div id="email-form">
                            <form action="https://formspree.io/xeqkggzj" method="POST">
                            <div className="form-field">
                                <label htmlFor="name">Name:</label>
                                <input type="text" name="name" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="phone">Phone (optional):</label>
                                <input type="text" name="phone" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Email:</label>
                                <input type="text" name="email" />
                            </div>
                            <div className="form-field">
                                <label htmlFor="message">Message:</label>
                                <textarea rows="7" type="message" name="email" />
                            </div>
                            <Button id="submit-btn" type="submit">Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </ContactWrapper>
        </>
    )
}