import { useState } from 'react'
import './index.css'
import './App.css'
// import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import LandingPage from './components/LandingPage';
// import Footer from './components/Footer';
import TestSlider from './components/TestSlider';
import TestNavbar from './components/TestNavbar';
// import ProductSlider from './components/ProductSlider';
import TestFooter from './components/TestFooter';
import DealioAccordion from './components/DealioAccordion';
import SearchResultsPage from './components/SearchResultsPage';
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="appdiv">
        <TestNavbar />
        
        <Routes>  {/* Use Routes instead of Switch in React Router v6 */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<SearchResultsPage />} /> {/* Define route for search results */}
        </Routes>
        
        <TestFooter />
        <TestSlider />
        <Footer />
      </div>
    </Router>
  );
}

export default App;



// function App() {


//   return (
//     <div class="appdiv">
      
//       <TestNavbar />
//       <LandingPage />
//       <TestFooter />
//       <TestSlider />
//     </div>
//   );
// }

// export default App
