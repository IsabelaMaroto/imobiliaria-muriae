export function PainelCasas(Casa) {
    return (
    <div>
        <div><img src={Casa.iconeA} alt='icone metros' /><h3>{Casa.metros}m²</h3></div>
        <div><img src={Casa.iconeB} alt='icone chuveiro' /><h3>{Casa.banheiro}</h3></div>
        <div><img src={Casa.iconeC} alt='icone cama' /><h3>{Casa.quartos}</h3></div>
    </div>
)}

