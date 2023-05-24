import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EducationPage from './pages/EducationPage';
import HomePage from './pages/HomePage';
import "react-toastify/dist/ReactToastify.css";
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
    <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          toastStyle={{backgroundColor: "rgb(25, 25, 25)"}}
        />
    <Footer />
  </BrowserRouter>

  );
}

export default App;
