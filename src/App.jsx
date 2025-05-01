import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Favorites from "./screens/Favorites";
import Compare from "./screens/Compare";
import Play from "./screens/Play";
import PokemonDetail from "./screens/PokemonDetail";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/shared/PrivateRoute";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/play" element={<Play />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
