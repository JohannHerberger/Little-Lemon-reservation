import './App.css';
import { Nav } from './Components/nav';
import { Footer } from './Components/footer';
import { Header } from './Components/header';
import { Main } from './Components/main';

function App() {
  return (
    <div className='App'>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

