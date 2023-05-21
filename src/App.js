import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';


function App() {
  return (
    <BrowserRouter>
     <Navbar />
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/education" element={<EducationPage />} />
        <Route exact path="/skills" element={<SkillsPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>

  );
}

export default App;
