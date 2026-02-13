import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar'; 

// Import your page components (make sure these files exist in /src/pages)
import Home from './pages/Home';
import Contact from './pages/Contact'; 
import Error from './pages/Error';
import Team from './pages/Team';

import './style.css'; // Corrected path relative to App.jsx

function App() {
  return (
    <Router>
      {/* AppNavbar stays at the top of every page */}
      <AppNavbar /> 
      
      <Container>
        <Routes>
          {/* Path "/" is your default homepage */}
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          {/* Path "/contact" is where your contact form lives */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Path "*" acts as a 404 - it catches any URL that doesn't match above */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
      
      {/* If you have a Footer component, place it here */}
    </Router>
  );
}

export default App;