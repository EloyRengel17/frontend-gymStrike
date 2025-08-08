import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MostrarCliente from './componentes/mostrar_clientes.jsx';
import Login from './componentes/login.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navigation menu
      <nav>
        <Link to="/">Login</Link> |{" "}
        <Link to="/clientes">Mostrar Cliente</Link>
      </nav>
 */}
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/clientes" element={<MostrarCliente />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
