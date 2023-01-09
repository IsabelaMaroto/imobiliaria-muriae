import Logo1 from '../../img/logo1.png'
import CopyIcone from '../../img/C.png'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DadosFooter } from './DadosFooter';


const FooterContainer= styled.section`
    background-color: #000;
    color: #FFFFFF;
    display:flex;
    flex-direction: column;
`
const Top= styled.div`
    display:flex;
    padding: 20px 30px 10px;
    justify-content: space-between;
    text-align: start;
    .link{
        color:#FFFFFF;
        text-decoration:none;
    }
    img{
        height:20px;
        margin-right: 10px;
    }
    h2{
        font-size: 1.3em;
        margin-bottom: 30px;
        font-weight: bold;
    }
    h3{
        font-size: 0.9em;
        margin-bottom: 10px;
    }
`
const Botom= styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 30px;
    height: 130px;

    .textoBotom{
        .link{
            text-decoration: none;
        }
        h4{
            font-size: 1em;
            color: #FFFFFF ;
        }
        img{
            height:15px;
        }
    }

    .logoBotom{
        img{
            height: 80px;
            margin-right: 50px;
        }
    }
`

export function Footer(){
    return(
        <FooterContainer>
            <Top>
                {DadosFooter.map((info,index) =>(
                <div key={index}>
                    <Link className='link' to={info.info1Link}>
                        <h2>{info.info1}</h2>
                    </Link>
                    <Link className='link' to={info.info2Link}>
                        <h3><img src={index === 3 ? info.Relogio :""}/> {info.info2}</h3>
                    </Link>
                    <Link className='link' to={info.info3Link}>
                        <h3><img src={index === 3 ? info.Instagram :''}/> {info.info3}</h3>
                    </Link>
                   <Link className='link' to={info.info4Link}>
                        <h3><img src={index === 3 ? info.Telefone :''}/> {info.info4}</h3>
                   </Link>
                   <Link className='link' to={info.info5Link}>
                        <h3><img src={index === 3 ? info.Email :''}/> {info.info5}</h3>
                   </Link>  
                </div>
                ))}
            </Top>
            <Botom>
                <div className='textoBotom'>
                    <Link className='link' to={'/'}>
                        <h4>www.imobiliariamuriae.com.br <img src={CopyIcone} alt={CopyIcone}/> 2022</h4>
                    </Link>
                </div>
                <div className='logoBotom'>
                    <Link to={'/'}>
                        <img src={Logo1} alt={Logo1}/>
                    </Link>
                </div>
            </Botom>
        </FooterContainer>
    )
}