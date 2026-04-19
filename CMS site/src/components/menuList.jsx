import { Link } from "react-router"
import Toastify from 'toastify-js'
import axios from 'axios'
import baseUrl from "../constant/baseUrl";

export default function MenuList({ cuisines, fetchCuisines }) {
    async function handleDelete() {
        try {
            const { data } = await axios.delete(`${baseUrl}cuisines/${cuisines.id}`, {
                headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
                },
            })

            fetchCuisines()
            Toastify({
                text: "Succeed Delete Menu",
                duration: 3000,
                close: false,
                gravity: "top",
                position: "left",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
            
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

    async function handleUpload(e) {
        try {
            const formData = new FormData()
            formData.append("imgUrl", e.target.files[0])

            const { data } =  await axios.patch (`${baseUrl}cuisines/${cuisines.id}`, formData, {
                headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
                },
            })
            
            fetchCuisines()
            Toastify({
                text: "Succeed update image",
                duration: 3000,
                close: false,
                gravity: "top",
                position: "left",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
            }).showToast();
            
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
            <tr className="border-t">
            <td className="p-3">
                <a href="image.html">
                <img
                    src={cuisines.imgUrl}
                    className="h-16 w-20 object-cover rounded cursor-pointer hover:scale-105 transition"
                />
                </a>
            </td>
            <td className="p-3">{cuisines.name}</td>
            <td className="p-3">{cuisines.CategoryId}</td>
            <td className="p-3 text-orange-500 font-bold">Rp.{cuisines.price}</td>
                <td className="p-3">
                    <div className="flex gap-2">
                    <Link to={`/update/${cuisines.id}`} className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Edit
                    </Link>
                
                    <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                        onClick={handleDelete}>
                        Delete
                    </button>

                    <label className="px-3 py-1 text-sm bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                         <input type="file" className="hidden" onChange={handleUpload} />
                        Upload
                    </label>
                    </div>
                </td>
            </tr>
        </>
    )
}