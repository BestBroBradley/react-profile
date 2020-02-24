import styled from "styled-components"
import "./fonts.css"
import "../components/images/cat.cur"

const main = "#689C28"
const click = "#C7CCD0"
const banner = "#8DAD52"
const font = "Meera Inimai"


export const MainPage = styled.div`
    
`

export const Button = styled.button`
    :hover {
        color: ${click}
    };

    :active {
        background: black
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
    .container {
        border: 3px double black;
        width: 100%;
        opacity: .8
    }

    #navbar {
        display: flex;
        height: auto;
        background: ${main};
        width: auto;
        justify-content: flex-end;
        border: 3px solid black;
        margin: 10px;
        @media only screen and (max-width: 400px) {
            justify-content: center
        }
    }

    #home-link {
        position: absolute;
        margin: 0 30px;
        left: 0;
        align-self: center;
        font-weight: bold
    }

    img {
        height: 76px;
        @media only screen and (max-width: 400px) {
            display: none
        }
    }

    .link-container {

        display: flex;
        flex-wrap: wrap;
    }

    .link {
        align-self: center;
    }

    #name {
        text-align: center
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
        background: ${banner};
        align-self: center;
        z-index: 30;
        @media only screen and (max-width: 560px) {
            width: 90%;
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

    #bio {

    }
`

export const FooterWrapper = styled.div`

    #footer {
        width: 80%;
        margin: auto;
        text-align: center;
    }
    
    a {

        margin: 15px;
        cursor: url("cat.cur"), default;

        :visited {
            color: black
        }
    }

`