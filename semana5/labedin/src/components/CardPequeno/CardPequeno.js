import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return (
        <div>
            <div className="smallcard-container">
                <img src={props.imagem} />
                <p>{props.endereco}</p>
            </div>
         </div>
    )
}

export default CardPequeno;