import ProductForm from "../components/produckForm";
import Toastify from 'toastify-js'
import axios from 'axios'
import baseUrl from "../constant/baseUrl";
import { useNavigate } from 'react-router'

export default function CreatePage() {
    const navigate = useNavigate()

    async function handleSubmit(e, form) {
        e.preventDefault()
        try {
            const { data } = await axios.post(`${baseUrl}cuisines`, form, {
                headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
                },
            })

            navigate('/home')
            Toastify({
                text: "Succeed Add New Menu",
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
          <ProductForm handleSubmit={handleSubmit} nameProp="Add Menu"/>
        </>
    )
}