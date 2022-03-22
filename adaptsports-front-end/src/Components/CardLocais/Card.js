import React from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import './CardLocais.css'

export default function Card(props) {

    function deleteById(id) {
        api.delete(`/locais/delete/${id}`
        ).then((res) => {
            window.location.reload(res);
        }).catch(err => {
            console.log(err)
        }).then(alert("O Destino Foi Deletado"))
    }

    return (
        <div className='body'>
            <div className='wrapper'>
                <div className='card centralizacao'>
                    <img src={props.imagem} alt='CardImg' />
                    <div className='infoLocais'>
                        <h5>NNumero do Local: {props.id}</h5>
                        <h3>{props.nome}</h3>
                        <h5>{props.cidade} - {props.estado}</h5>
                        <Link to='/atualizarLocal' className='botãoAtualizar'>Atualizar</Link>
                        <button onClick={() => deleteById(props.id)}>Deletar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
