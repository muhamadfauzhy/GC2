import { useState, useEffect } from "react"
import { Link, useParams } from "react-router";
import ProduckCard from "../components/ProductCard"
import axios from 'axios'
import Toastify from 'toastify-js'
import loadingGif from '../assets/loading.svg'
import baseUrl from "../constant/baseUrl";

export default function Detail() {
    const { id } = useParams()
    const [cuisines, setCuisines] = useState({})
    const [loading, setLoading] = useState(false)

    async function fetchCuisines() {
        try {
            setLoading(true)
            const { data } = await axios.get(`${baseUrl}pub/cuisines/${id}`)

            setCuisines(data.data)
        } catch (error) {
            Toastify({
                text: error.response.data.message,
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "bottom", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#F87171",
                    color: "black",
                    border: "solid #000000",
                    borderRadius: "8px",
                    boxShadow: "2px 2px black"
                },
            }).showToast();
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCuisines()
    }, [])

    return (
        <>
            {loading ? (
            <div className="flex justify-center items-center min-h-screen">
                <img src={loadingGif} className="w-32" alt="loading" />
            </div>
            ) : (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full hover:shadow-xl transition">
                
                <img
                    src={cuisines.imgUrl}
                    alt={cuisines.name}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                />

                <h1 className="text-2xl font-bold mb-2">
                    {cuisines.name}
                </h1>

                <p className="text-orange-500 font-semibold mb-3">
                    Rp {cuisines.price}
                </p>

                <p className="text-gray-600 text-sm mb-4">
                    {cuisines.description}
                </p>

                <Link
                    to="/"
                    className="inline-block mt-2 px-4 py-2 bg-orange-400 text-white rounded-lg hover:opacity-90"
                >
                    ← Back
                </Link>
                </div>
            </div>
            )}
        </>
    );
}