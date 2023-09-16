import IconeBanheiro from '../../img/banheiros.png';
import IconeMetros from '../../img/area.png';
import IconeQuartos from '../../img/camaIcone.png';

export function PainelCasas(Casa) {
    return (
    <div>
        <div><img src={IconeMetros} alt='icone metros' /><h3>{Casa.metros}m²</h3></div>
        <div><img src={IconeBanheiro} alt='icone chuveiro' /><h3>{Casa.banheiro}</h3></div>
        <div><img src={IconeQuartos} alt='icone cama' /><h3>{Casa.quartos}</h3></div>
    </div>
)}

