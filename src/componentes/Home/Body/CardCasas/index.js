import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {ListaCasas} from '../../../ListaCasas/DadosCasas';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PainelCasas } from '../../../PainelDescritivo';

const CasaCarousel=styled.div`
.link{
    color: #000;
    text-decoration: none;
    img{
      height: 350px;
      width: 500px;
    }
  }
  
`
const DescricaoContainer= styled.div`
  display:flex;
  justify-content: start;
  div{
    display: flex;
    margin-right: 15px;
    align-items: center;
  }
  img{
    height:20px;
    margin: 0 10px;
  }
  h3{
    font-size: 1em;
  }
`
const BoxTituloCard=styled.div`
  padding-left: 30px;
`
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

export const Carousel = () => (
  <section>
    <BoxTituloCard>
      <h2>Destaques</h2>
    </BoxTituloCard>
    <AliceCarousel
        mouseTracking
        items={ListaCasas.map((casa)=>(
          <CasaCarousel className="item">
            <Link to={`PaginaCasa/${casa.id}`} className='link'>
              <img src={casa.imagem} alt='casa'/>
              <h2>{casa.titulo}</h2>
            </Link>
            <DescricaoContainer>
              {PainelCasas(casa)}
            </DescricaoContainer>
         </CasaCarousel>
        ))}
        responsive={responsive}
        controlsStrategy="default"
    />
  </section>
     
);