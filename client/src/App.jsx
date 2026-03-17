import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import Error from './components/Error';
import Team from './pages/Team';
import './style.css';

const App = () => {
  return (

    <>  
      <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          
          <Route path="*" element={<Error />} />
        </Routes>
      
      <Footer />
    </>

  );
}

export default App;