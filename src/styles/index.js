import styled from "styled-components"
import "./fonts.css"

const click = "#C7CCD0"
const font = "Meera Inimai"

export const Button = styled.button`
    :hover {
        color: ${click}
    };

    :active {
        opacity: 0
    };

    font-family: ${font}, sans-serif;
    margin: 15px 10px;
    font-size: 1.5rem;
    background: none;
    border: none;
    @media only screen and (max-width: 450px) {
        font-size: 1rem;
        margin: 5px;
        padding: 1.1rem
    }
    
    `
export const HeaderWrapper = styled.div`
    
display: block;
    font-family: ${font};
    text-align: center;

    #profile-image {
        display: flex;
        width: 15%;
        margin: auto;
        @media only screen and (max-width: 560px) {
            margin-right: 15px;
            width: 60%
        }
        @media only screen and (max-width: 400px) {
            width: 50%
        }
    }

    #location {
        position: absolute;
        left: 3%;
        font-size: 2.5rem;
        @media only screen and (max-width: 420px) {
            font-size: 2rem;
            margin-top: 50px;
            left: 15px;
        }
    }

    #profile-span {
        border: 3px solid black;
        left: 0;
        width: 100%;
        height: 0;
        position: absolute;
        align-self: center;
        z-index: 30;
        @media only screen and (max-width: 560px) {
            width: 80%;
            left: 5%

        }
        @media only screen and (max-width: 400px) {
            border: none;
            width: 80%;
            left: 5%

        }
    }

    #hr {
        width: 100%;
        height: 20px;
        border-bottom: 6px solid black

    }

    #first-btn {
        align-self: center;
        position: absolute;
        right: 140px;
        margin-top: 20px;
        @media only screen and (max-width: 560px) {
        left: 10px;
        margin: 0;
        right: auto;
        top: 15px
        padding-left: 0
        }
}

    #second-btn {
        align-self: center;
        position: absolute;
        right: 20px;
        margin-top: 20px;
        @media only screen and (max-width: 560px) {
            left: 10px;
            right: auto;
            top: 50px;
            margin: 0;
            padding-left: 0
        }
    }

    img {
        border: 5px grey solid;
        border-radius: 59%;
        width: 100%;
        z-index: 40;

    }


`

export const AboutWrapper = styled.div`

    display: block;
    font-family: ${font};
    text-align: center;

    #profile-image {
        display: flex;
        width: 33%;
        margin: auto;
        @media only screen and (max-width: 560px) {
            margin-right: 15px;
            width: 60%
        }
    }

    #profile-span {
        border: 3px solid black;
        left: 10%;
        width: 80%;
        height: auto;
        position: absolute;
        align-self: center;
        z-index: 30;
        @media only screen and (max-width: 560px) {
            width: 75%;
            left: 5%
        }
    }

    #contact-btn {
        align-self: center;
        position: absolute;
        left: 20px
    }

    #port-btn {
        align-self: center;
        position: absolute;
        right: 20px;
        @media only screen and (max-width: 560px) {
            left: 20px;
            right: auto;
            top: 50px;
        }
    }

    img {
        border: 5px grey solid;
        border-radius: 59%;
        width: 100%;
        z-index: 40;

    }

    #header-mobile {
        display: none;
        @media only screen and (max-width: 400px) {
            display: block;
        }
    }

    #header-desktop {
        @media only screen and (max-width: 400px) {
            display: none;
        }
    }

    #bio {

    }
`

export const ContactWrapper = styled.div`

    font-family: ${font};

    .container {
        margin-top: 30px;
        @media only screen and (max-width: 400px) {
            border-top: 5px solid black

        }
    }


    h1 {
        margin-bottom: 0
    }

    p {
        margin-top: 0
    }

    #contact-details {
        text-align: center;
    }

    #email-form {
        text-align: left;
        width: 40%;
        height: auto;
        margin: auto;
        padding: 20px;
        border: 3px solid black;
        margin-bottom: 30px;
        @media only screen and (max-width: 560px) {
            width: 80%;
        }
    }

    input, textarea {
        width: 100%;
        border: 2px dashed ${click};
        font-size: 1rem
    }

    input {
        height: 30px;
    }

    .form-field {
        margin-top: 10px;
    }

    #submit-btn {
        padding: 0
    }
`

export const PortfolioWrapper = styled.div`
font-family: ${font};
text-align: center;
        
        .container {
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: row;
        text-align: center;
        @media only screen and (max-width: 400px) {
                border-top: 5px solid black
                margin-top: 30px;
    
            }
        }
    
        h1 {
            margin-bottom: 0
        }
    
        p {
            margin-top: 0
        }
`

export const CardWrapper = styled.div`
    flex-basis: 300px;
    border: 3px grey solid;
    border-radius: 12%;
    margin: 30px 15px;
    padding: 0 30px;
    position: relative;
    @media only screen and (max-width: 400px) {
        flex-basis: 200px;

    }

    .fa-paw {
        position: absolute;
        color: ${click}
    }

    #top-paw {
        left: 15px;
        top: 15px;
    }

    #bottom-paw {
        right: 15px;
        bottom: 15px;
    }

    h3 {
        @media only screen and (max-width: 400px) {
            font-size: 1rem
        }
    }

    #repo-div {
        padding: 15px 0;
    }

    a {

        :hover {
            color: ${click}
        }

        :active {
            opacity: 0
        }

    }

    h1{
        border-bottom: 1px solid grey;
        margin-bottom: 10px;
    }
`

export const ImgWrapper = styled.div`

    .port-img {    
        width: 95%;
        border: 3px solid grey;
        :hover {
            opacity: 0.5
        }
    }
`

export const FooterWrapper = styled.div`

    #footer {
        width: 80%;
        margin: 20px auto;
        text-align: center;
    }
    
    a {

        margin: 15px;
        cursor: url("cat.cur"), default;
        :hover {
            color: yellowgreen
        }

        :visited {
            color: black
        }
    }

    #footer {

    }
`