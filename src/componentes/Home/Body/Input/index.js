import { useState } from "react";
import cardImagem from "../../../../img/cardImagem.jpg";
import styled from "styled-components";
import { ResultadoCasas } from "../CasasPesquisadas/index";
import axios from "axios";

const CasasContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
const FiltrosContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${cardImagem});
  align-items: center;
  height: 500px;
  width: auto;
  background-position: center;
  background-size: cover;

  .botao {
    background-color: black;
    color: #FFFFFF;
    width: 90px;
    height: 42px;
    border-radius: 8px;
    border: 0.8px solid #d89e1a;
  }
  .botao:hover {
    background-color: #d89e1a;
    cursor: pointer;
  }
`;
const Pesquisa = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000000;
  width: 70%;
  height: 70px;
  border-radius: 10px;
  border: 3px solid #d89e1a;
`;
const Selects = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  color: #FFFFFF;
`;

function PesquisaInput() {
  const [casaPesquisada, setCasas] = useState([]);

  return (
    <CasasContainer>
      {Filtros(setCasas)}
      {ResultadoCasas(casaPesquisada)}
    </CasasContainer>
  );
}
export default PesquisaInput;

let ListaCasas;

async function Resposta() {
  const { data } = await axios.get(`http://localhost:3000/casas`);
  ListaCasas = data;
}
Resposta();

function Filtros(setCasas) {
  return (
    <FiltrosContainer>
      <Pesquisa>
        <Selects>
          <div>
            <label>Tipo</label>
            <select name="input" id="input">
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
            </select>
          </div>
          <div>
            <label>Quartos</label>
            <select name="quartos" id="quartos">
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>
          <div>
            <label>Banheiros</label>
            <select name="banheiros" id="banheiros">
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>
        </Selects>
        <div>
          <button
            className="botao"
            onClick={(evento) => {
              const tipoSelecionado = document
                .getElementById("input")
                .value.toLowerCase();

              const quartosSelecionados = document.getElementById("quartos").value;
              const banheirosSelecionados = document.getElementById("banheiros").value;

              const resultadoPesquisa = ListaCasas.filter((casa) =>
                casa.tipo === tipoSelecionado && (casa.quartos >= quartosSelecionados && casa.banheiro >= banheirosSelecionados)
              );
              setCasas(resultadoPesquisa);
            }}
          >
            Buscar
          </button>
        </div>
      </Pesquisa>
    </FiltrosContainer>
  );
}
