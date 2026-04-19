import { useState } from "react";
import axios from 'axios'
import baseUrl from "../constant/baseUrl";
import { useNavigate } from "react-router";
import Toastify from 'toastify-js'

export default function Login() {
    const navigate = useNavigate ()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleLogin(e) {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${baseUrl}login`, { email, password })
            localStorage.setItem("access_token", data.access_token)

           Toastify({
                text: "Succeed Login",
                duration: 3000,
                close: false,
                gravity: "top",
                position: "left",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                }).showToast();

                navigate('/home')
        } catch (error) {
            Toastify({
                text: error.response.data.message,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#d2042d",
                },
                }).showToast();
            
        }
    }

    return(
        <>
            {/* Login */}
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
    
                <form onSubmit={handleLogin} className="space-y-5" >
                    {/* Email */}
                    <div>
                    <label className="block text-sm mb-1">Email
                    </label>
                    <input
                        placeholder="Masukkan email"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
    
                    {/* Password */}
                    <div>
                    <label className="block text-sm mb-1">Password
                    </label>
                    <input
                        type="password"
                        placeholder="Masukkan password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
    
                    {/* Button */}
                    <button
                    className="block w-full text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition font-semibold tracking-wide">
                    Login
                    </button>
                </form>
                </div>
            </div>
        </>
    )
}