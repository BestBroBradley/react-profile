import React from "react"
import { CardWrapper } from "../../styles"

export const Card = (props) => {
    return (
        <CardWrapper>
            <div className="card">
                <h1>{props.name}</h1>
                <h2>{props.image}</h2>
                <h3>{props.description}</h3>
            </div>
        </CardWrapper>
    )
}