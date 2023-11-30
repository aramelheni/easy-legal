import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import SigninPage from './components/signin/Signin.js';
import SignupPage from './components/signup/Signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/aboutus" element={<aboutus />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
