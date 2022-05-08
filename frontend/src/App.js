// General Imports
import React from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Imports
import WorkordersPage from './pages/WorkordersPage/WorkordersPage'
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ResponseForm from './components/ResponseForm/ResponseForm';
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute><WorkordersPage/></PrivateRoute>}/>
        <Route path="/response/:ticketId/" element={<PrivateRoute><ResponseForm/></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
