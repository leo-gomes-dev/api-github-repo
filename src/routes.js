import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import Erro from './pages/Erro';
import Header from './components/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route exact path="/produto/:id?" element={<Produto />} />

        {/* Sempre a última rota */}
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;