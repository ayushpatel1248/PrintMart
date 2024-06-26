import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter ,useParams  } from "react-router-dom";
import HomePage from './components/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<HomePage/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
