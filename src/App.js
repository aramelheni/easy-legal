import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GuestNavbar from './components/guest_content/guest_navbar';
import SigninPage from './components/signin/Signin.js';
import SignupPage from './components/signup/Signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <GuestNavbar />
        <Routes>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
