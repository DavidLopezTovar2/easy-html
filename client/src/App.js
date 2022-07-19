import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Register from './views/Register';
import Home from './views/Home';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}/>;
          <Route path='/' element={<Home/>}/>;
        </Routes>
      </BrowserRouter>
  );
}

export default App;
