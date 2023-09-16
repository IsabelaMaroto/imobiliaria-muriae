import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Mapa } from "./Mapa";
import { CarouselCasas } from "./Carousel";
import {PainelCasas} from '../PainelDescritivo/index';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const TextosCasa = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 70px 100px 40px;
`
const DescricaoTexto=styled.div`
    padding: 0 100px 50px;
    text-align: justify;
`
const Painel= styled.div`
display: flex;
justify-content: start;
padding: 0 60px 50px;

div{
    display:flex;
    margin-left: 20px;
}

img{
    height: 25px;
    padding: 0 10px;
}

h3{
    font-size: 1.3em;
}
`


export default function PaginaCasa(){
    const [Casa, setCasa] = useState();

    let { id } = useParams();

    async function Resposta(){
        const {data} = await axios.get(`http://localhost:3000/casas`);

        const novaCasa = data.find((casa) => {
              if(casa.id == id){
                  return casa;
              }
          })
        
        setCasa(novaCasa)
    }
    
    useEffect(() => {
        Resposta()
    }, []);
    
   
    return(<>
        {
            Casa ? (
        
        <section>
            {CarouselCasas(Casa)}
            <div>
                <TextosCasa>
                    <div><h1>{Casa.titulo}</h1></div>
                    <div><h2>R$ {Casa.preco}</h2></div>
                </TextosCasa>
                <Painel>
                    {PainelCasas(Casa)}
                </Painel>
                <DescricaoTexto>
                    <p>{Casa.descricao}</p>
                </DescricaoTexto>
            </div>
            {Mapa(Casa)}
        </section>
    ) : null
        }
    
    </>
    )
}



