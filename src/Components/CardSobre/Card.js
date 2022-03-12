import React from 'react';
import './CardSobre.css'

export default function Card(props) {
    return (
        <div className='body'>
            <div className='wrapper'>
                <div className='card centralizacao'>
                    <img src={props.img} alt='CardImg' />
                    <div className='info'>
                        <h5>{props.titulo}</h5>
                        <a href={props.linkedin} Target="_blank">Linkedin</a>
                        <a href={props.github} Target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
