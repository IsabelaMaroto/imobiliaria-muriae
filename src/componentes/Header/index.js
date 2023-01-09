import styled from "styled-components";
import Icones from "./Icones";
import Logo from "./Logo-Header";
import { ListaIcones } from "./Icones/dadosIcones";



const HeaderFlex = styled.div`
    display:flex;
    background: white;
    justify-content: space-between;
    align-items: center;
    height: auto;
    padding: 20px 100px;
`

function Header() {
    return(
        <HeaderFlex>
            <Logo/>
            <Icones lista={ListaIcones}></Icones>
        </HeaderFlex>
    );
}

export default Header;