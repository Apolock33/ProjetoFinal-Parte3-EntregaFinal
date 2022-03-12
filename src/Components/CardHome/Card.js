import React from 'react';
import './CardHome.css'

export default function Card(props) {
    return (
        <div className='body'>
            <div className='wrapper'>
                <div className='card centralizacao'>
                    <img src={props.img} alt='CardImg' />
                    <div className='info'>
                        <h5>{props.titulo}</h5>
                        <a href={props.link}>Saiba Mais</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
