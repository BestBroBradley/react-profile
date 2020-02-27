import React from "react"
import { Img } from "./Img"
import { CardWrapper } from "../../styles"

export const Card = (props) => {
    return (
        <CardWrapper>
                <i id="top-paw" className="fas fa-paw fa-2x"></i>
                <i id="bottom-paw" className="fas fa-paw fa-2x"></i>
                <h1 id="card-title">{props.name}</h1>
                < Img alt={props.alt} href={props.href} img={props.img}/>
                <h3 id="card-description">{props.description}</h3>
                <div id="repo-div">
                    <a target="_blank" rel="noopener noreferrer" href={props.repo}>Link to Repo</a>
                </div>
        </CardWrapper>
    )
}