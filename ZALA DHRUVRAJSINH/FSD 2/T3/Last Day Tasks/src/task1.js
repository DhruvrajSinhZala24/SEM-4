import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./components/home"
import Profile from "./components/profile"
import Product from "./components/product"
import Login from "./components/login"

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="active nav-link"><Link to="/">Home</Link></li>
                            <li className="nav-link"><Link to="/Product">Product</Link></li>
                            <li className="nav-link"><Link to="/Profile">Profile</Link></li>
                            <li className="nav-link"><Link to="/Login">Login</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="Product" element={<Product />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Login" element={<Login />} />
            </Routes>
        </Router>
    )
}
export default Navbar