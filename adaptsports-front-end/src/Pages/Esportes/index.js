import React from 'react';
import ImgCard1 from '../../Assets/Img/add ciclismo.jpg'
import ImgCard2 from '../../Assets/Img/futebol5Adaptado.jpg'
import ImgCard3 from '../../Assets/Img/add.jpg'
import ImgCard4 from '../../Assets/Img/atletismoAdaptado.jpg'
import ImgCard5 from '../../Assets/Img/esgrimaAdaptada.jpg'
import ImgCard6 from '../../Assets/Img/goalballAdaptado.jpg'
import Card from '../../Components/CardEsportes/Card'
import './Esportes.css'

export default function Esportes() {
  return (
    <div>
      <div className="divisor">
        <h3>Esportes</h3><br/>
        <p>Aqui você fica informado sobre todos os esportes adaptados que pode estar praticando nos locais registrados em nossa "Página Locais".</p>
        <br/>
      </div>
      <div className="ContainerCardsEsp">
        <Card img={ImgCard1} /><br />
        <Card img={ImgCard2} /><br />
        <Card img={ImgCard3} />
      </div>
      <div className="ContainerCardsEsp">
        <Card img={ImgCard4} /><br />
        <Card img={ImgCard5} /><br />
        <Card img={ImgCard6} />
      </div>
    </div>
  );
}