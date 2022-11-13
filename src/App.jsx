import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Hero from "./components/Hero";
import InfoPage from "./components/InfoPage";

import './main.css'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/pydast-docs" element={<Hero/>} />
        <Route path="/pydast-docs/:doc" element={<InfoPage/>}/>
        <Route path="*" element={<Navigate to="/pydast-docs" replace/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App