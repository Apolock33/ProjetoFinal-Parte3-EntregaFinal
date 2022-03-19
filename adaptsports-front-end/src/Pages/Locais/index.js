import React from 'react';
import Card from '../../Components/CardLocais/Card'
import imgCard from '../../Assets/Img/BasqueteAdaptado.jpg'
import './Locais.css'

export default function Locais() {


  
  return (
    <section>
      <div className='divisor'>
        <h3>Locais</h3>
        <p>Aqui você pode checar todos os locais para pratica adaptada de atividade física, basta clicar nos cards para ver suas informações mais detalhadas. Ah! E não esqueça de avaliar!</p>
      </div>
      <div className='cards'>
        <div className='cardContainer'>
          <Card
            imagem={imgCard} 
            nome='Add'
            cidade='sp'
            estado='sp'
          /><br/>
          
        </div>
        <div className='cardContainer'>
          <Card
            imagem={imgCard}
            nome=''
            cidade=''
            estado=''
            /><br />
          
        </div>

      </div>
    </section>

  );
}