import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//?Import Routes
import Home from '../pages/Home';
import HousingForm from '../pages/HousingForm';
import About from '../pages/About';
import PageNotFound from '../pages/PageNotFound';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fiche_Logement" element={<HousingForm />} />
          <Route path='/About' element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
};

export default App;