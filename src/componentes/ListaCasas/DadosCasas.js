import IconeBanheiro from '../../img/banheiros.png';
import IconeMetros from '../../img/area.png';
import IconeQuartos from '../../img/camaIcone.png';
import Casa1 from '../../img/casa1.jpg';
import Casa2 from '../../img/casa2.jpg';
import Casa3 from '../../img/casa3.jpg';
import Casa4 from '../../img/casa4.jpg';
import Apto1 from '../../img/apto1.jpg';
import Apto2 from '../../img/apto2.jpg';
import CasaInterna from '../../img/FotosInteriores1.jpg';
import CasaInterna2 from '../../img/FotosInteriores2.jpg';
import CasaInterna3 from '../../img/FotosInteriores3.jpg';
import CasaInterna6 from '../../img/FotosInteriores6.jpg';
import AptoImg1 from '../../img/apto1 (1).jpg';
import AptoImg2 from '../../img/apto1 (2).jpg';
import AptoImg3 from '../../img/apto1 (3).jpg';
import AptoImg4 from '../../img/apto1 (4).jpg';
import Casa2Img1 from '../../img/casa2Img (4).jpg';
import Casa2Img2 from '../../img/casa2Img (5).jpg';
import Casa2Img3 from '../../img/casa2Img (6).jpg';
import Casa2Img4 from '../../img/casa2Img (7).jpg';
import Casa3Img1 from '../../img/casa3Img (1).jpg';
import Casa3Img2 from '../../img/casa3Img (2).jpg';
import Casa3Img3 from '../../img/casa3Img (3).jpg';
import Casa3Img4 from '../../img/casa3Img (4).jpg';
import Casa3Img5 from '../../img/casa3Img (5).jpg';
import Casa4Img1 from '../../img/casa4Img (1).jpg';
import Casa4Img2 from '../../img/casa4Img (2).jpg';
import Casa4Img3 from '../../img/casa4Img (3).jpg';


export const ListaCasas = [
    {
        imagem: Casa1,
        banner: [
            Casa1,
            CasaInterna,
            CasaInterna2,
            CasaInterna3,
            CasaInterna6,
        ],
        titulo: 'Casa 01',
        preco: '5.000',
        metros: '200',
        iconeB: IconeBanheiro,
        iconeA: IconeMetros,
        iconeC: IconeQuartos,
        banheiro: '3',
        quartos: '2',
        codigo: '000',
        tipo: 'casa',
        id: '1',
        link: '/PaginaCasa/1',
        endereco: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26609.500530635793!2d-53.37689615681545!3d-33.52250866819789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x950d1d96faf0d2c9%3A0x9e6e64e242355eb0!2sSanta%20Vit%C3%B3ria%20do%20Palmar%2C%20RS%2C%2096230-000!5e0!3m2!1spt-BR!2sbr!4v1672263596572!5m2!1spt-BR!2sbr',
        descricao: 'Casa ampla toda construída em alvenaria e com muitos detalhes em madeira de Angelim-Pedra. Muito espaçosa, o duplex conta com um pequeno pomar. São mais de 350m de terreno e 200m2 de area construida, distribuídos em 4 quartos sendo uma suite, copa e cozinha conjugados. A suíte possui uma sacada com linda vista para cidade garantindo uma excelente ventilação e luminosidade por todo o imóvel, isso sem contar o telhado colonial pela garagem indo até o espaço gourmet. A piscina, próxima a churrasqueira, equipada com chuveirão. A casa oferece as condições ideais para festas e encontros sociais, pois garante espaço, privacidade e segurança. O imóvel ainda conta com piscina (25mil L), quintal com árvores frutíferas e espaço para sua horta.'
    },
    {
        imagem: Casa2,
        banner: [
            Casa2,
            Casa2Img1,
            Casa2Img2,
            Casa2Img3,
            Casa2Img4,
        ],
        titulo: 'Casa 02',
        preco: '4.500',
        metros: '300',
        banheiro: '2',
        quartos: '3',
        codigo: '111',
        id: '2',
        tipo: 'casa',
        link: '/PaginaCasa/2',
        iconeB: IconeBanheiro,
        iconeA: IconeMetros,
        iconeC: IconeQuartos,
        endereco: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5698162326253!2d-42.36863268511481!3d-21.129710085943813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc644f3eca9df%3A0x217bc27d4736c6a3!2zQWxhbWVkYSBTw6NvIEpvc8OpIC0gTXVyaWHDqSwgTUcsIDM2ODgwLTAwMA!5e0!3m2!1spt-BR!2sbr!4v1672261149327!5m2!1spt-BR!2sbr',
        descricao: 'Lorem ipsum nisi facilisis taciti lacus curabitur aenean adipiscing massa fusce fames class, gravida ipsum suspendisse metus venenatis euismod fermentum blandit sem duis varius. duis vitae dictum quisque lacus porta inceptos donec, morbi sagittis hac rhoncus risus turpis neque, lacinia elit taciti vestibulum diam ut. blandit ullamcorper leo hac in dapibus mauris ornare, eu proin sollicitudin vehicula odio ipsum pretium aenean, senectus sollicitudin orci sollicitudin conubia quisque. sed lorem ultrices vestibulum auctor ac vitae varius vehicula himenaeos, nostra neque condimentum bibendum mattis risus facilisis urna donec magna, vestibulum aliquet gravida turpis senectus commodo ultrices potenti.'
    },
    {
        imagem: Casa3,
        banner: [
            Casa3,
            Casa3Img1,
            Casa3Img2,
            Casa3Img3,
            Casa3Img4,
            Casa3Img5,
        ],
        titulo: 'Casa 03',
        preco: '5.000',
        metros: '275',
        banheiro: '3',
        quartos: '4',
        codigo: '222',
        tipo: 'casa',
        id: '3',
        link: '/PaginaCasa/3',
        iconeB: IconeBanheiro,
        iconeA: IconeMetros,
        iconeC: IconeQuartos,
        endereco: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5698162326253!2d-42.36863268511481!3d-21.129710085943813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc644f3eca9df%3A0x217bc27d4736c6a3!2zQWxhbWVkYSBTw6NvIEpvc8OpIC0gTXVyaWHDqSwgTUcsIDM2ODgwLTAwMA!5e0!3m2!1spt-BR!2sbr!4v1672261149327!5m2!1spt-BR!2sbr',
        descricao: 'Lorem ipsum nisi facilisis taciti lacus curabitur aenean adipiscing massa fusce fames class, gravida ipsum suspendisse metus venenatis euismod fermentum blandit sem duis varius. duis vitae dictum quisque lacus porta inceptos donec, morbi sagittis hac rhoncus risus turpis neque, lacinia elit taciti vestibulum diam ut. blandit ullamcorper leo hac in dapibus mauris ornare, eu proin sollicitudin vehicula odio ipsum pretium aenean, senectus sollicitudin orci sollicitudin conubia quisque. sed lorem ultrices vestibulum auctor ac vitae varius vehicula himenaeos, nostra neque condimentum bibendum mattis risus facilisis urna donec magna, vestibulum aliquet gravida turpis senectus commodo ultrices potenti.',
    },
    {
        imagem: Casa4,
        banner: [
            Casa4,
            Casa4Img1,
            Casa4Img2,
            Casa4Img3,
        ],
        titulo: 'Casa 04',
        preco: '3.000',
        metros: '200',
        banheiro: '2',
        quartos: '2',
        codigo: '333',
        id: '4',
        tipo: 'casa',
        link: '/PaginaCasa/4',
        iconeB: IconeBanheiro,
        iconeA: IconeMetros,
        iconeC: IconeQuartos,
        endereco: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5698162326253!2d-42.36863268511481!3d-21.129710085943813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc644f3eca9df%3A0x217bc27d4736c6a3!2zQWxhbWVkYSBTw6NvIEpvc8OpIC0gTXVyaWHDqSwgTUcsIDM2ODgwLTAwMA!5e0!3m2!1spt-BR!2sbr!4v1672261149327!5m2!1spt-BR!2sbr',
        descricao: 'Lorem ipsum nisi facilisis taciti lacus curabitur aenean adipiscing massa fusce fames class, gravida ipsum suspendisse metus venenatis euismod fermentum blandit sem duis varius. duis vitae dictum quisque lacus porta inceptos donec, morbi sagittis hac rhoncus risus turpis neque, lacinia elit taciti vestibulum diam ut. blandit ullamcorper leo hac in dapibus mauris ornare, eu proin sollicitudin vehicula odio ipsum pretium aenean, senectus sollicitudin orci sollicitudin conubia quisque. sed lorem ultrices vestibulum auctor ac vitae varius vehicula himenaeos, nostra neque condimentum bibendum mattis risus facilisis urna donec magna, vestibulum aliquet gravida turpis senectus commodo ultrices potenti.',
    },
    {
        imagem: Apto1,
        banner: [
            Apto1,
            AptoImg1,
            AptoImg2,
            AptoImg3,
            AptoImg4,
        ],
        titulo: 'Apto. 01',
        preco: '2.000',
        metros: '150',
        banheiro: '2',
        quartos: '2',
        codigo: '333',
        id: '5',
        tipo: 'apartamento',
        link: '/PaginaCasa/5',
        iconeB: IconeBanheiro,
        iconeA: IconeMetros,
        iconeC: IconeQuartos,
        endereco: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5698162326253!2d-42.36863268511481!3d-21.129710085943813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc644f3eca9df%3A0x217bc27d4736c6a3!2zQWxhbWVkYSBTw6NvIEpvc8OpIC0gTXVyaWHDqSwgTUcsIDM2ODgwLTAwMA!5e0!3m2!1spt-BR!2sbr!4v1672261149327!5m2!1spt-BR!2sbr',
        descricao: 'Lorem ipsum nisi facilisis taciti lacus curabitur aenean adipiscing massa fusce fames class, gravida ipsum suspendisse metus venenatis euismod fermentum blandit sem duis varius. duis vitae dictum quisque lacus porta inceptos donec, morbi sagittis hac rhoncus risus turpis neque, lacinia elit taciti vestibulum diam ut. blandit ullamcorper leo hac in dapibus mauris ornare, eu proin sollicitudin vehicula odio ipsum pretium aenean, senectus sollicitudin orci sollicitudin conubia quisque. sed lorem ultrices vestibulum auctor ac vitae varius vehicula himenaeos, nostra neque condimentum bibendum mattis risus facilisis urna donec magna, vestibulum aliquet gravida turpis senectus commodo ultrices potenti.',
    },
    {
        imagem: Apto2,
        banner: [
            Apto2,
            AptoImg1,
            AptoImg2,
            AptoImg3,
            AptoImg4,
        ],
        titulo: 'Apto. 02',
        preco: '3.000',
        metros: '200',
        banheiro: '2',
        quartos: '2',
        codigo: '333',
        id: '6',
        tipo: 'apartamento',
        link: '/PaginaCasa/6',
        iconeB: IconeBanheiro,
        iconeA: IconeMetros,
        iconeC: IconeQuartos,
        endereco: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5698162326253!2d-42.36863268511481!3d-21.129710085943813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbcc644f3eca9df%3A0x217bc27d4736c6a3!2zQWxhbWVkYSBTw6NvIEpvc8OpIC0gTXVyaWHDqSwgTUcsIDM2ODgwLTAwMA!5e0!3m2!1spt-BR!2sbr!4v1672261149327!5m2!1spt-BR!2sbr',
        descricao: 'Lorem ipsum nisi facilisis taciti lacus curabitur aenean adipiscing massa fusce fames class, gravida ipsum suspendisse metus venenatis euismod fermentum blandit sem duis varius. duis vitae dictum quisque lacus porta inceptos donec, morbi sagittis hac rhoncus risus turpis neque, lacinia elit taciti vestibulum diam ut. blandit ullamcorper leo hac in dapibus mauris ornare, eu proin sollicitudin vehicula odio ipsum pretium aenean, senectus sollicitudin orci sollicitudin conubia quisque. sed lorem ultrices vestibulum auctor ac vitae varius vehicula himenaeos, nostra neque condimentum bibendum mattis risus facilisis urna donec magna, vestibulum aliquet gravida turpis senectus commodo ultrices potenti.',
    },
];