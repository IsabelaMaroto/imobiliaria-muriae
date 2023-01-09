import { useParams } from "react-router-dom";
import { ListaCasas } from "../ListaCasas/DadosCasas";
import styled from "styled-components";
import { Mapa } from "./Mapa";
import { CarouselCasas } from "./Carousel";
import {PainelCasas} from '../PainelDescritivo/index';

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
    // PEGA O ID DO PARÂMETRO DA URL ex: localhost/ ID = 1
    let { id } = useParams();

    // DENTRO DE ListaCasas PROCURA UMA casa COM ID = AO PARÂMETRO
    const Casa = ListaCasas.find((casa) => {
        if(casa.id === id){
            return casa
        } return null
    })
    
    // PASSA PARA O CAROUSEL A CASA ESPECÍFICA (com banner específico)
    return(
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
    )
}



