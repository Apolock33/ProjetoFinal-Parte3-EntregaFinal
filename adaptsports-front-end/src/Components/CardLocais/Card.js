import React from 'react';
import { Link } from 'react-router-dom';
import './CardLocais.css'

export default function Card(props) {
    return (
        <div className='body'>
            <div className='wrapper'>
                <div className='card centralizacao'>
                    <img src={props.imagem} alt='CardImg' />
                    <div className='infoLocais'>
                        <h3>{props.nome}</h3>
                        <h5>{props.cidade} - {props.estado}</h5>
                        <Link to='/atualizarLocal' className='botãoAtualizar'>Atualizar Local</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
