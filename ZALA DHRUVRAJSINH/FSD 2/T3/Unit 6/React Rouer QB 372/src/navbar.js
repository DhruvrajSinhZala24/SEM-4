import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Shop from "./components/Shop_Props"

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="active nav-item"><Link to="/">Home</Link></li>
                            <li className="nav-item"><Link to="/Shop">Shop</Link></li>
                            <li className="nav-item"><Link to="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="Shop" element={<Shop />} />
                <Route path="Contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}
export default Navbar