import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: "1rem", background: "#eee", marginBottom: "20px" }}>
          <NavLink to="/" style={{ margin: "0 10px" }}>Dashboard</NavLink>
          <NavLink to="/books" style={{ margin: "0 10px" }}>Books</NavLink>
          <NavLink to="/events" style={{ margin: "0 10px" }}>Events</NavLink>
          <NavLink to="/members" style={{ margin: "0 10px" }}>Members</NavLink>
          <NavLink to="/menu" style={{ margin: "0 10px" }}>Menu</NavLink>
        </nav>

        <main style={{ padding: "0 2rem" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/events" element={<Events />} />
            <Route path="/members" element={<Members />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
