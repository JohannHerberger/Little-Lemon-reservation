import './App.css';
import { ReservationFormProvider } from './Context/ReservationFormContext';
import { Nav } from './Components/nav';
import { Footer } from './Components/footer';
import { Homepage } from './Components/Homepage';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './Components/menu';
import { About } from './Components/about';
import { Contact } from './Components/contact';
import { Filler } from './Components/Filler';


function App() {
  return (
      <div className='App'>
        <Nav/>
        <Filler />
        <Routes >
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/menu"element={<Menu />}/>
          <Route path="/reservation" element={<ReservationFormProvider />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

