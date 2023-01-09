import styled from "styled-components";
import { Botoes } from "../Botao/index";
import React from "react";
import { useForm } from "react-hook-form";

const CadastroContainer=styled.section`
    margin: 50px 100px;
`
const TituloCadastro=styled.div`
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
const BoxMensagem=styled.div`
    p{
        font-weight: bold;
    }
    h5{
        font-size: 0.8em;
    }
`
const BoxDadosPessoais=styled.div`
    margin-bottom: 30px;
    div{
        display: flex;
        flex-direction: column;

    }
    input{
        margin-bottom: 10px;
        padding: 5px;
    }
`
const BoxTitulo=styled.div`
    margin-bottom: 30px;
    border-bottom: solid 1px #000;

    h3{
        font-size: 1.5em;
    }
`
const BoxDadosCasa=styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    .item{
        margin-bottom: 20px;
        padding: 5px;
    }
    
`
const BoxBotao=styled.div`
    display:flex;
    justify-content: center;
`
const Box=styled.div`
    display:flex;
    flex-direction: column;
    label{
        margin-bottom: 5px;
    }
`
export default function Cadastro(){
    const {register, handleSubmit, setValue} = useForm();
    const onSubmit = (data) => console.log(data);
    const checkCEP= (e)=>{
        const cep= e.target.value;
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => resposta.json()).then(data =>{
                console.log(data)
                setValue('uf', data.uf);
                setValue('localidade', data.localidade);
                setValue('logradouro', data.logradouro);
                setValue('cep', data.cep);
        });
    }
    return(
       <CadastroContainer>
            <TituloCadastro>
                <h1>Negocie o seu imóvel!</h1>
            </TituloCadastro>
            <form onSubmit = { handleSubmit(onSubmit) } >
                <BoxMensagem>
                    <p>Informe no formulário abaixo os dados do imóvel e também seus dados para contato.</p>
                    <h5>As informações serão avaliadas e nossa equipe entrará em contato. Nada será publicado sem contato e autorização prévia!</h5>
                </BoxMensagem>
                <BoxDadosPessoais>
                    <div>
                        <label>Nome</label>
                        <input type='text' placeholder="Ex: Maria da Silva Santos" required minLength={3}></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' placeholder="Ex: mariasilvasantos@gmail.com" required minLength={4}></input>
                    </div>
                    <div>
                        <label>Telefone</label>
                        <input type='tel' placeholder="(xx) xxxxx-xxxx" required minLength={8}></input>
                    </div>
                    <div>
                        <label>CPF</label>
                        <input type='text' id="cpf"  placeholder="xxx.xxx.xxx-xx" pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" required minLength={11} maxLength={14}></input>
                    </div>
                </BoxDadosPessoais>
                <BoxTitulo>
                    <h3>Informações do imóvel</h3>
                </BoxTitulo>
                <BoxDadosCasa>
                        <Box>
                            <label>Tipo de imóvel</label>
                            <select className="item">
                                <option>Casa</option>
                                <option>Apartamento</option>
                                <option>Comercial</option>
                                <option>Terreno</option>
                                <option>Flat</option>
                                <option>Fazenda</option>
                            </select>
                        </Box>
                        <Box>
                            <label>Finalidade</label>
                            <select className="item">
                                <option>Aluguel</option>
                                <option>Venda</option>
                                <option>Temporada</option>
                            </select>
                        </Box>
                        <Box>
                            <label>CEP</label>
                            <input className="item" type='text' placeholder="CEP" {...register('cep')} required onBlur={checkCEP}></input>
                        </Box>
                        <Box>
                            <label>Cidade</label>
                            <input className="item" type='text' placeholder="Cidade" {...register('localidade')} disabled></input>
                        </Box>
                        <Box>
                            <label>Estado</label>
                            <input className="item" type='text' placeholder="Estado/UF" {...register('uf')} disabled></input>
                        </Box>
                        <Box>
                            <label>Logradouro</label>
                            <input className="item" type='text' placeholder="Av. Jõao Maria..." {...register('logradouro')} disabled></input>
                        </Box>
                        <Box>
                            <label>Adicione fotos do imóvel:</label>
                            <input type='file' accept="image/*" multiple='multiple' className="item" required></input>
                        </Box>
                        <Box>
                            <label>Descreva o imóvel</label>
                            <textarea className='item' placeholder="X quartos, X banheiros..." required></textarea>
                        </Box>
                </BoxDadosCasa>
                <BoxBotao>
                    <Botoes/>
                </BoxBotao>
            </form>
       </CadastroContainer>
    )
}



