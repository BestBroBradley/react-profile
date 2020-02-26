import React from "react"
import { Navbar } from '../Navbar'
import { ContactWrapper, Button } from "../../styles"

export const Contact = () => {
    return (
        <>
            <Navbar
                title="Contact"
                secondaryLink="/"
                secondaryBtn="Home"
                primaryLink="/portfolio"
                primaryBtn="Portfolio"
                alt="telephone"
            />
            <ContactWrapper>
                <div className="container">
                    <div id="contact-details">
                        <h1>Contact Me</h1>
                            <p>Feel free to reach out with any inquiries.</p>
                        <div id="email-form">
                            <form>
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