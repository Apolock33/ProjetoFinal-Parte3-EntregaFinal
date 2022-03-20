import React, { useEffect, useState } from 'react';
import Card from '../../Components/CardLocais/Card'
import './Locais.css'
import api from '../../Services/api';

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
        <h3>Locais</h3>
        <p>Aqui você pode checar todos os locais para pratica adaptada de atividade física, basta clicar nos cards para ver suas informações mais detalhadas. Ah! E não esqueça de avaliar!</p>
      <br/>
      </div>

      <div className='cards'>
        {locais.map((local) => (
          <div className='cardContainer' key={local.id}>
           <br/> <Card
              imagem={local.imagem}
              nome={local.nome}
              cidade={local.cidade}
              estado={local.estado}
            /><br />
          </div>
        ))}
      </div>

    </section>

  );
}