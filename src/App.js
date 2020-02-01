import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
