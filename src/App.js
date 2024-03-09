import './App.css';
import { ReservationFormProvider } from './Context/ReservationFormContext';
import { Nav } from './Components/nav';
import { Footer } from './Components/footer';
import { Homepage } from './Components/Homepage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div className='App'>
        <Nav/>
        <Routes >
          <Route path="/" element={<Homepage />}/>
          <Route path="/Reservation" element={<ReservationFormProvider />}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

