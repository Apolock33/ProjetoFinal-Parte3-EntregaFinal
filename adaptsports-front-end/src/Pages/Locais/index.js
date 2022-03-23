import React, { useEffect, useState } from 'react';
import Card from '../../Components/CardLocais/Card'
import './Locais.css'
import api from '../../Services/api';
import { Link } from 'react-router-dom';



export default function Locais() {

  const [locais, setLocais] = useState([])

  useEffect(() => {
    api.get('/locais').then(({ data }) => {
      setLocais(data);
    })
  }, []);
  console.log(locais)

  return (
    <section>
      <div className='divisor'>
        <br /><br /><h3>Locais</h3><br />
        <p>Aqui você pode checar todos os locais para pratica adaptada de atividade física, basta clicar nos cards para ver suas informações mais detalhadas. Você também pode adicionar locais que não estejam apresentados em nosso site ou atualizar as informações dos que já estão. Ah! E não esqueça de avaliar!</p>
        <br />
      </div>
      <div className='ModalContainer'>
        <div className='cards'>
          {locais.map((local) => (
            <div className='cardContainer' key={local.id}>
              <br />
              <Card
                id={local.id}
                imagem={local.imagem}
                nome={local.nome}
                cidade={local.cidade}
                estado={local.estado}
              /><br />
            </div>
          ))}
          <div className='centralizacao' align='center'>
            <Link to='/adicionarLocal' className='botaoAdicionar'>Adicionar Local</Link>
          </div>
        </div>
      </div>
    </section>

  );
}