import styled from "styled-components";
import { Botoes } from "../../Botao";
import ImgContatos from '../../../img/imgContatos.jpg';

const FormContainer= styled.div`
display:flex;
justify-content: space-between;
margin-left: 50px;
`
const BoxImgContatos=styled.div`
    img{
        height: 600px;
        width:500px;
        object-fit: cover;
    }
`
const Form= styled.form`
display:flex;
flex-direction:column;
align-items:end;
justify-content: center;

input{
    margin-bottom: 20px;
    padding: 5px 20px;
    width: 600px;
}
textarea{
    width: 600px;
    height: 100px;
    padding: 5px 20px;
    margin-bottom: 50px;
}
`


export function FormularioContatos() {
    return <FormContainer>
        <BoxImgContatos>
            <img src={ImgContatos} alt='foto' />
        </BoxImgContatos>
        <Form>
            <input placeholder="Nome Completo" type='text' required></input>
            <input placeholder="E-mail" type='email' required></input>
            <input placeholder="Telefone" type='tel' required></input>
            <textarea placeholder="Escreva sua mensagem..." required></textarea>
            <Botoes/>
        </Form>
    </FormContainer>;
}


