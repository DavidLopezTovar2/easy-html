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

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}/>;
          <Route path='/' element={<Home/>}/>;
          <Route path='/mi' element={<Mi/>}/>;
        </Routes>
      </BrowserRouter>
  );
}

export default App;
