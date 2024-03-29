import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const Imagem= styled.img`
    height: 600px;
    width:  1600px;
    object-fit: cover;
`

export function CarouselCasas(Casa) {
    return (
        <div>
            <Carousel>
                {Casa.banner.map((img,index)=>(
                    <Carousel.Item key={index}>
                        <Imagem 
                            src={require(`../../../img/${img}`)}
                            alt="oi"
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
    </div>
    )
    
}
