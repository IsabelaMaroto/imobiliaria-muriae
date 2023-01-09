import { useState } from "react";
import { ListaCasas } from "../../../ListaCasas/DadosCasas";
import cardImagem from '../../../../img/cardImagem.jpg';
import styled from "styled-components";
import {ResultadoCasas} from "../CasasPesquisadas/index";

const CasasContainer = styled.section`
    display: flex;
    flex-direction: column;
`
const FiltrosContainer = styled.div`
    display: flex;
    justify-content: center;
    background-image: url(${cardImagem});
    align-items: center;
    height: 500px;
    width: auto;
    background-position: center;
    background-size: cover;

    .botao{
        background-color: black;
        color:white;
        width: 90px;
        height: 42px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border: 0.8px solid #D89E1A;
    }
    .botao:hover{
        background-color: #EBCF8C;
        cursor: pointer;
    }
`
const Input = styled.input`
    width: 800px;
    height: 40px;
    border: 0.8px solid #D89E1A;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 0 20px;
    display: flex;
`

function PesquisaInput(){

    const [casaPesquisada, setCasas] = useState([])

    return(
        <CasasContainer>
            {Filtros(setCasas)}
            {ResultadoCasas(casaPesquisada)}
         </CasasContainer>
    )
}
export default PesquisaInput


function Filtros(setCasas) {
    return (
        <FiltrosContainer>
            <div>
                <Input
                    placeholder="Busque: Casa/Apartamento"
                    id="input" />
            </div>
            <div>
                <button className="botao" onClick={evento => {
                    const textoDigitado = document.getElementById('input').value.toLowerCase();
                    const resultadoPesquisa = ListaCasas.filter(casa => casa.tipo.toLowerCase().includes(textoDigitado));
                    setCasas(resultadoPesquisa);
                } }
                >Buscar</button>
            </div>
        </FiltrosContainer>
)}
