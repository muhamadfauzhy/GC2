import { NavLink } from "react-router";
import logo from "../assets/Logo2.png";

export default function Navbar() {
    return(
        <>
        <nav className="sticky top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-10 bg-white shadow">
          {/* Left Menu */}
          <NavLink to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-black" }> 
            <h1>MENU LIST</h1>
          </NavLink>
          {/* Logo Center (FIXED CENTER) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img
              src={logo}
              alt="logo"
              className="h-24 w-auto object-contain"
            />
          </div>
          {/* Right Menu */}
          <div className="flex items-center space-x-6 text-sm tracking-widest">
            <a href="login-page.html" className="hover:text-orange-500">
              LOGIN
            </a>
          </div>
        </nav>
        </>
    )
}