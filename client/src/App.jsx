import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Error from './components/Error';
import Team from './pages/Team';
import About from './pages/About';
import './style.css';

const App = () => {
  return (

    <>  
      <div className="d-flex flex-column min-vh-100">
        <Navbar /> 

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </>

  );
}

export default App;