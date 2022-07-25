import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./views/Register";
import Home from "./views/Home";
import Mi from "./views/Mi";
import Login from "./views/Login";
import CompanyForm from "./views/CompanyForm";
import ProductForm from './views/ProductForm';
import CompanyDetail from './views/Plantillas';
import Services from './views/Servicios';
import MyProducts from "./views/MyProducts";
import EditProduct from "./views/EditProduct";

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
        
        <Route path="/myproducts/:id" element={<MyProducts />}/>;
        <Route path="/editproduct/:id/:idproduct" element={<EditProduct />}/>;
        <Route path="/register" element={<Register />} />;
        <Route path="/" element={<Home />} />;
        <Route path="/mi/:id" element={<Mi />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/create-company" element={<CompanyForm />}/>;
        <Route path="/edit-company/:id" element={<CompanyForm />}/>;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
