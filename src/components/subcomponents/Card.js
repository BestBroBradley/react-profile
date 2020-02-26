import React from "react"
import { CardWrapper } from "../../styles"

export const Card = (props) => {
    return (
        <CardWrapper>
            <a target="_blank" rel="noopener noreferrer" href={props.href}>
                <h1 id="card-title">{props.name}</h1>
                <h2 id="card-image">{props.image}</h2>
                <h3 id="card-description">{props.description}</h3>
            </a>
        </CardWrapper>
    )
}