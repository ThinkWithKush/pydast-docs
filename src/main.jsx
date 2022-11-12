import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Hero from "./components/Hero";
import InfoPage from "./components/InfoPage";

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Pydast-Docs" element={<Hero/>} />
        <Route path="/Pydast-Docs/:doc" element={<InfoPage/>}/>
        <Route path="*" element={<Navigate to="/Pydast-Docs" replace/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
