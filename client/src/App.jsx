import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar'; 
import AppFooter from './components/AppFooter';
import Home from './pages/Home';
import Contact from './pages/Contact'; 
import Error from './pages/Error';
import Team from './pages/Team';
import './style.css';

function App() {
  return (

    <>  
      <AppNavbar /> 
      
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
      
      <AppFooter />
    </>

  );
}

export default App;