import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { projectData as data } from './assets/project-data';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Layout data={ data }/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
