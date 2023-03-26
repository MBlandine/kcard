import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import "./App.css";
import Kevin from "./Pages/Kevin";

function App() {
 

  return (
        <Router>
          <Routes>
            <Route path="/" element={<Kevin/>}/>
          </Routes>
        </Router>
  );
}

export default App;
