import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { projectData as data } from './assets/project-data';
import Layout from './Components/Layout';
import ProjectDetail from './Components/ProjectDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout data={ data }/>} />
          <Route path='/projects/:id' element={<ProjectDetail data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
