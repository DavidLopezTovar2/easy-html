import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Register from './views/Register';
import Home from './views/Home';
import Mi from './views/Mi';
import Login from './views/Login';
import ProductForm from './views/ProductForm';
import CompanyDetail from './views/Plantillas';
import Services from './views/Servicios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />;
        <Route path='/' element={<Home />} />;
        <Route path='/:nameurlcompany' element={<CompanyDetail />} />;
        <Route path='/mi' element={<Mi />} />;
        <Route path='/login' element={<Login />} />;
        <Route path='/productform/:id' element={<ProductForm />} />;
        <Route path='/services' element={<Services />} />;
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
