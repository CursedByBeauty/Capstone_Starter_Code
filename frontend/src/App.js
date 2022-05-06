// General Imports
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import useAuth from "./hooks/useAuth";

// Pages Imports
import WorkordersPage from "./pages/WorkordersPage/WorkordersPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [tickets, setTickets] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getAllTickets();
  }, []);

  async function getAllTickets() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/workorders/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <Navbar />
      <PrivateRoute>
        <Route
          path="/"
          element={<WorkordersPage tickets={tickets} setTickets={setTickets} />}
        />
      </PrivateRoute>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
