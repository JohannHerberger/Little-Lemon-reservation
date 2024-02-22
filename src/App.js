import './App.css';
import { Nav } from './Components/nav';
import { Footer } from './Components/footer';
import { Homepage } from './Components/Homepage';
import { Reservation } from './Components/Reservation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className='App'>
        <Nav/>
        <Routes >
          <Route path="/" element={<Homepage />}/>
          <Route path="/Reservation" element={<Reservation />}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

