import { Route,  Routes } from 'react-router-dom';
import Navigation from './assets/Navigation';
import Login from './assets/Login';
import Main from './assets/Main';
import Register from './assets/Register';
import Footer from './assets/Footer';
import './App.css';
import Destination from './assets/Destination';

function App() {
  return (
    
    <div className='app'>
    <Navigation/>
    
     <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/destination" element={<Destination />} />
        

  </Routes>
   <Footer/>   
    
    </div>
  );
}

export default App;
