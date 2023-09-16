import styled from "styled-components";

const ContainerMapa = styled.div`
display: flex;
justify-content: center;
padding: 30px 100px;
`
const MapaIframe= styled.iframe`
border: 0;


`

export function Mapa(Casa) {
    return <ContainerMapa>
        <MapaIframe
            src={Casa.endereco}
            width="1000"
            height="500"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0" 
        />
    </ContainerMapa>;
}