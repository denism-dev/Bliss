import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import IntroductionPage from './Pages/IntroductionPage';
import ScrollToTop from './Components/ScrollToTop';
import SoftwareDevelopment from './Pages/SoftwareDev';
import StartProject from './Pages/StartProject';
import GetStarted from './Pages/GetStarted ';
import FloatingNotification from './Components/FloatingNotification';
import SeoServices from './Pages/SeoServices';
import MobileDev from './Pages/MobileDev';

const App = () => {
  return (

    
    <Router>
      <ScrollToTop/>
      {/* <FloatingNotification /> */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />

        <Route path='/contact' element={<Contact />} />
        <Route path='/services/softwareDevelopment' element={<SoftwareDevelopment />} />
        <Route path='/services/MobileDevelopment' element={<MobileDev />} />
        <Route path='/services/seoServices' element={<SeoServices />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/introduction' element={<IntroductionPage />} />
        <Route path='/start-project' element={<StartProject />} />
        <Route path='/getStarted' element={<GetStarted />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}


export default App;

