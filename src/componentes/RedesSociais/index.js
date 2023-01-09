import IconeWhatsApp from '../../img/whatsapp.webp';
import IconeInstagram from '../../img/instagramIcon.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RedesSociaisContainer= styled.div`
    display:flex;
    justify-content: start;
    align-items:center;
    margin-bottom: 10px;
`
const IconeRedes= styled.div`
    img{
        height: 35px;
        padding-right: 10px;
    }
`


export function RedesSociais() {
    return (
        <RedesSociaisContainer>
            <Link to={'/instagram'}><IconeRedes><img src={IconeInstagram} alt='logo2'/></IconeRedes></Link>
            <Link to={'/whatsapp'}><IconeRedes><img src={IconeWhatsApp} alt='logo'/></IconeRedes></Link>
        </RedesSociaisContainer>
    )
}