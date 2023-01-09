import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerIcones = styled.div`
    .link{
        text-decoration: none;
        color: #000;
        display: flex;
        align-items: center;

        img{
            height: 30px;
            margin-right: 10px;
        }
    }
`
const SectionIcones= styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
`
function Icones(props){
    return(
        <SectionIcones >
            { props.lista.map((icones, index) => (
            <ContainerIcones key={index}>
                <Link 
                    className="link"
                    to={icones.endereco}
                >
                    <img src={icones.icone} alt='icone'/>
                    {icones.texto}
                </Link>
            </ContainerIcones>
            ))}  
        </SectionIcones>
    )
}
export default Icones;
