import './App.css';
import { ReservationFormProvider } from './Context/ReservationFormContext';
import { Nav } from './Components/nav';
import { Footer } from './Components/footer';
import { Homepage } from './Components/Homepage/Homepage';
import { Menu } from './Components/menu';
import { About } from './Components/about';
import { Contact } from './Components/Contact/contact';
import { Filler } from './Components/Filler';


function App() {
  return (
      <div className='App'>
        <Nav/>
        <Filler />
        <Homepage />
        <About />
        <Menu />
        <ReservationFormProvider />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;

