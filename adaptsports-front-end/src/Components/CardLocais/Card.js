import React from 'react';
import './CardLocais.css'

export default function Card(props) {
    return (
        <div className='body'>
            <div className='wrapper'>
                <div className='card centralizacao'>
                    <img src={props.imagem} alt='CardImg' />
                    <div className='info'>
                        <h1>{props.nome}</h1>
                        <h3>{props.cidade} - {props.estado}</h3>
                        <button>Saiba Mais</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
