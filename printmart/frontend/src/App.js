import './App.css';
import { Route, Routes, BrowserRouter ,useParams  } from "react-router-dom";
import HomePage from './components/home/HomePage';
import PrintOut from './components/printoutform/PrintOut';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<HomePage/>} />        
        <Route path="/printout" element= {<PrintOut/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
