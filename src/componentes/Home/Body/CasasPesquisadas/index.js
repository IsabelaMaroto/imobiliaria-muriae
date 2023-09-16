import { Link } from "react-router-dom";
import styled from "styled-components";
import { PainelCasas } from "../../../PainelDescritivo";
const ExibeCasas = styled.div`
    display: grid;
    grid-template-columns: 300px 300px 300px;
    padding: 50px 200px;
    justify-content: space-between;
    font-family: arial;

    .linkPaginaCasa{
        text-decoration: none;
        color: black;
    }


 `   
const Texto = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    font-size: 0.7em;
    width: 300px;
`
const Descricao = styled.div`
    display:flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 100px;
    width: 300px;
    div{
        display: flex;
        margin-right: 10px;
    }
    img{
        height: 20px;
        padding: 0 10px;
    }
    h3{
        font-size: 1em;
    }

`
const Imagem = styled.div`
    display: cover;

    img{ 
        height: 300px;
        width: 100%;
    }
`

export function ResultadoCasas(casaPesquisada) {
    return <ExibeCasas>
        {casaPesquisada.map((casa, index) => (
            <Link to={`/PaginaCasa/${casa.id}`} key={index} className='linkPaginaCasa'>
                <Imagem className="imagem">
                    <img src={require(`../../../../img/${casa.imagem}`)} alt={casa.titulo} />
                </Imagem>
                <Texto>
                    <h2>{casa.titulo}</h2>
                    <h3>R${casa.preco}</h3>
                </Texto>
                <Descricao>
                    {PainelCasas(casa)}
                </Descricao>
            </Link>
        ))}
    </ExibeCasas>
}