import React from "react"
// import { ImgWrapper } from "../../styles"

export const Img = (props) => {
 
    return (
            <>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
            <img alt={props.alt} src={`${process.env.PUBLIC_URL}/images/${props.img}.png`}/>
            </a>
            </>
    )
}