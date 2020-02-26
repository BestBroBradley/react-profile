import React from "react"
import { ImgWrapper } from "../../styles"

export const Img = (props) => {

    return (
        <ImgWrapper>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
                <div className="img-div">
                    <img className="port-img" alt={props.alt} src={`${process.env.PUBLIC_URL}/images/${props.img}.png`} />
                </div>
            </a>
        </ImgWrapper>
    )
}