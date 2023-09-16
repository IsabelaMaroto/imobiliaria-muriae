import { Link } from "react-router-dom"
import styled from "styled-components"
import LogoImg from "../../../img/logo.png"

const ContainerLogo= styled.div`

    img{
        height: 70px;
        margin-right: 100px;
    }
`
export default function Logo(){
    return(
        <ContainerLogo>
            <Link  to={'/'}>
                <img src={LogoImg} alt='logo'/>
            </Link>
        </ContainerLogo>
    )
}
