// General Imports
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import useAuth from "./hooks/useAuth";

// Pages Imports
import WorkordersPage from "./pages/WorkordersPage/WorkordersPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PortalChoicePage from "./pages/PortalChoicePage/PortalChoicePage";
import ResidentPage from "./pages/ResidentPage/ResidentPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ResponsePage from "./pages/ResponsePage/ResponsePage";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [user, token] = useAuth();
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getAllTickets();
  }, [token]);

  const getAllTickets = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/workorders/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setTickets(response.data);
    } catch (error) {
      console.log(error.message);
      console.log(tickets);
    }
  };

  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<PortalChoicePage  />}
        />
        <Route
          path="/maintenance"
          element={
            <PrivateRoute>
              <WorkordersPage setTickets={setTickets} tickets={tickets} />
            </PrivateRoute>
          }
        />
        <Route
          path="/resident"
          element={
            <PrivateRoute>
              <ResidentPage getAllTickets={getAllTickets}/>
            </PrivateRoute>
          }
        />
        <Route
          path="/response/:ticketId/"
          element={<ResponsePage setTickets={setTickets} tickets={tickets} />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
  
    </div>
  );
}

export default App;
