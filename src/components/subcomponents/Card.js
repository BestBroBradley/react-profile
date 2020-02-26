import React from "react"
import { Img } from "./Img"
import { CardWrapper } from "../../styles"

export const Card = (props) => {
    return (
        <CardWrapper>
                <h1 id="card-title">{props.name}</h1>
                < Img alt={props.alt} href={props.href} img={props.img}/>
                <h3 id="card-description">{props.description}</h3>
                <a target="_blank" rel="noopener noreferrer" href={props.repo}>Link to Repo</a>
        </CardWrapper>
    )
}