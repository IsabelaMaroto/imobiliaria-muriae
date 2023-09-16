import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cadastro from './componentes/Cadastro';
import Contatos from './componentes/Contatos';
import { Footer } from './componentes/Footer';
import Home from './componentes/Home';
import Header from './componentes/Header';
import PaginaCasa from './componentes/PaginaCasas';
import { About } from './componentes/Sobre';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contatos' element={<Contatos/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/PaginaCasa/:id' element={<PaginaCasa/>}/>
        <Route path='/sobre' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;