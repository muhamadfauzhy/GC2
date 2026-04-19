import { useState, useEffect } from "react";
import ProductForm from "../components/produckForm";
import { useParams } from "react-router"
import axios from "axios";
import baseUrl from "../constant/baseUrl";
import { useNavigate } from 'react-router'
import Toastify from 'toastify-js'

export default function EditPage() {
    const [cuisines, setCuisines] = useState({})
    const { id } = useParams() 
    const navigate = useNavigate()

    async function handleSubmit(e, form) {
        e.preventDefault()
        try {
            const { data } = await axios.put(`${baseUrl}cuisines/${id}`, form, {
                headers: {
                Authorization: `Bearer ${localStorage.access_token}`,
                },
            })

            navigate('/home')
            Toastify({
                text: "Succeed Edit Menu",
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
    
    async function fetchCuisines() {
        try {
            const { data } = await axios.get(`${baseUrl}cuisines/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                },
            })

            setCuisines(data.data)
        } catch (error) {
    
        } 
    }

    useEffect (() => {
        fetchCuisines()
    }, [])

    return(
        <>
          <ProductForm nameProp={"Edit Menu"} cuisines={cuisines} handleSubmit={handleSubmit}/>
        </>
    )
}