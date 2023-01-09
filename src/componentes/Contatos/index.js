import { DadosFooter } from "../Footer/DadosFooter";
import styled from "styled-components";
import { FormularioContatos } from "./Formulário";
import { RedesSociais } from "../RedesSociais";


const ContatosContainer= styled.section`
    padding: 50px 150px;
`
const TituloContatos= styled.div`
    display:flex;
    justify-content: center;
    color: #d89e1a;
    height: 40px;
    align-items: center;
    margin-bottom: 50px;

    h1{
        font-size: 2em;
        font-weight: bold;
    }
`
const InformacoesContatos= styled.div`
    margin-bottom: 20px;
    h2{
        font-size: 1.5em;
        font-weight: bold;
    }
    h3{
        font-size: 1em;
    }
    h5{
        font-size: 1.2em;
    }
`
const BottomContatos= styled.div`
    border-top: solid 1px #000;
`
const TextoBottom= styled.div`
    margin: 20px 0 60px;
    h4{
        font-size: 1em;
    }
`


export default function Contatos(){
    return(
        <ContatosContainer>
            <TituloContatos>
                <h1>Fale conosco!</h1>
            </TituloContatos>
            <InformacoesContatos>
                <h2>{DadosFooter[0].info1}</h2>
                <h3>{DadosFooter[0].info2}</h3>
                <h3>{DadosFooter[0].info3}</h3>
                <h3>{DadosFooter[0].info4}</h3>
                <h3>{DadosFooter[0].info5}</h3>
                <h5>{DadosFooter[3].info5}</h5>
            </InformacoesContatos>
            <RedesSociais/>
            <BottomContatos>
                <TextoBottom>
                    <h4>Se você tem alguma sugestão, dúvida ou solicitação a fazer, utilize esse espaço para entrar em contato conosco. Teremos satisfação em responder.</h4>
                </TextoBottom>
                <FormularioContatos/>
            </BottomContatos>
        </ContatosContainer>
    )
}




