import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;