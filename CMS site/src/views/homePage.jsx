import { useState, useEffect } from "react";
import MenuList from "../components/menuList";
import axios from "axios";
import baseUrl from "../constant/baseUrl";
import loadingGif from "../assets/loading.svg";

export default function Home() {
const [cuisines, setCuisines] = useState([]);
const [loading, setLoading] = useState(false);


async function fetchCuisines() {
    try {
        setLoading(true);
        const { data } = await axios.get(`${baseUrl}cuisines`, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        });

        setCuisines(data.data);
        } catch (error) {
        console.log(error.response?.data);
        } finally {
        setLoading(false);
        }
    }

    useEffect(() => {
        fetchCuisines();
    }, []);

    if (loading) {
        return (
        <div className="flex justify-center items-center w-screen h-screen">
            <img src={loadingGif} className="w-1/4" />
        </div>
        );
    }

    return (
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
            <tr>
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            {cuisines.map((cuisine) => (
            <MenuList cuisines={cuisine} key={cuisine.id} fetchCuisines={fetchCuisines}/>
            ))}
        </tbody>
        </table>
    );
}