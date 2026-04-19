import { NavLink, useNavigate } from "react-router";
import logo from "../assets/Logo2.png";

export default function Navbar() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.clear();
        navigate("/");
    }

    return (
        <nav className="sticky top-0 left-0 w-full z-50 bg-white shadow px-6 py-4">
        <div className="grid grid-cols-3 items-center">
            <div className="flex items-center gap-6">
            <NavLink
                to="/home"
                className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
                }
            >
                MENU LIST
            </NavLink>

            <NavLink
                to="/add"
                className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
                }
            >
                ADD MENU
            </NavLink>

            <NavLink
                to="/addUser"
                className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : "text-black"
                }>
                ADD User
            </NavLink>
            </div>

            <div className="flex justify-center">
            <img src={logo} alt="logo" className="h-16 w-auto object-contain" />
            </div>

            <div className="flex justify-end">
            <button
                onClick={handleLogout}
                className="text-sm tracking-widest hover:text-orange-500"
            >
                LOGOUT
            </button>
            </div>
        </div>
        </nav>
    );
}

