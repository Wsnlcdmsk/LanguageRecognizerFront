import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TextPage } from './components/pages/textPage';
//import HomePage from './components/pages/homePage';
//import SearchPage from './components/pages/searchPage'
//import Appbar from './components/bars/appBar';

function App() {
  return (
   /* <Router>
      <div>
        <Appbar/>
        <Routes>
          <Route path="/text" element={<TextPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );*/
  <TextPage />
)
}

export default App;