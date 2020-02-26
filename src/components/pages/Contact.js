import React from "react"
import { Navbar } from '../Navbar'
import { ContactWrapper, Button } from "../../styles"

export const Contact = () => {
    return (
        <>
            <Navbar
                title="Contact"
                primaryLink="/"
                primaryBtn="About"
                secondaryLink="/portfolio"
                secondaryBtn="Portfolio"
            />
            <ContactWrapper>
                <div className="container">
                    <div id="contact-details">
                        <h1>Contact Me</h1>
                            <p>Feel free to reach out with any inquiries.</p>
                        <div id="email-form">
                            <form>
                            <div>
                                <label for="name">Name:</label>
                                <input type="text" name="name" />
                            </div>
                            <div>
                                <label for="phone">Phone (optional):</label>
                                <input type="text" name="phone" />
                            </div>
                            <div>
                                <label for="email">Email:</label>
                                <input type="text" name="email" />
                            </div>
                            <div>
                                <label for="message">Message:</label>
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