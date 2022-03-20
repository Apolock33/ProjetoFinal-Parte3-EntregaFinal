import React from 'react';
import './CardLocais.css'

export default function Card(props) {
    return (
        <div className='body'>
            <div className='wrapper'>
                <div className='card centralizacao'>
                    <img src={props.imagem} alt='CardImg' />
                    <div className='info'>
                        <h3>{props.nome}</h3><br/>
                        <h5>{props.cidade} - {props.estado}</h5>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
