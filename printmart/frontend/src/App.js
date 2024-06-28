import './App.css';
import { Route, Routes, BrowserRouter ,useParams  } from "react-router-dom";
import HomePage from './components/home/HomePage';
import PrintOut from './components/printoutform/PrintOut';
import Login from './components/loign/Login';
import Register from './components/Register/Register';
import { Link, Navigate } from "react-router-dom";
import AllProducts from './components/allproducts/AllProducts';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<HomePage/>} />        
        <Route path="/printout" element= {<PrintOut/>} />        
        <Route path="/login" element= {<Login/>} />        
        <Route path="/register" element= {<Register/>} />        
        <Route path="/allproducts" element= {<AllProducts/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
