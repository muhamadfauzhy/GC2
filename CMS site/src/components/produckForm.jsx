import { useState, useEffect } from "react"
import axios from "axios";
import baseUrl from "../constant/baseUrl";

export default function ProductForm ({handleSubmit, nameProp, cuisines}) {
    const [categories, setCategories] = useState([])
    const [form, setForm] = useState({
        name: '',
        description: '',
        price: 0,
        imgUrl: '',
        CategoryId: ''

    })

    function handleForm(value, fieldName) {
        setForm((oldValue) => {
            return {
                ...oldValue,
                [fieldName]: value
            }
        })
    }

    async function fetchCategories() {
    try {
        const { data } = await axios.get(`${baseUrl}categories`, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        });

        setCategories(data.data)        
        } catch (error) {
        console.log(error.response?.data);
        } 
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        if(cuisines){
            setForm({
                name: cuisines.name,
                description: cuisines.description,
                price: cuisines.price,
                imgUrl: cuisines.imgUrl,
                CategoryId: cuisines.CategoryId
            })
        }

    }, [cuisines])

    return(
        <>
            {/* Created and Edit menu */}
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-10">
                <div className="bg-white rounded-2xl shadow p-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800">{nameProp}</h2>
                    </div>
                    <form action="" method="POST" className="space-y-5"
                    onSubmit={(e) => handleSubmit(e, form)}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        onChange={(e) => handleForm(e.target.value, "name")}
                        value={form.name}/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                        </label>
                        <textarea
                        name="description"
                        rows={4}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        onChange={(e) => handleForm(e.target.value, "description")}
                        value={form.description}/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                onChange={(e) => handleForm(+e.target.value, "price")}
                                value={form.price}/>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image URL
                        </label>
                        <input
                        type="text"
                        name="imgUrl"
                        placeholder="https://example.com/image.jpg"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        onChange={(e) => handleForm(e.target.value, "imgUrl")}
                        value={form.imgUrl}/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                        </label>
                        <select
                        name="categoryId"
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        onChange={(e) => handleForm(+e.target.value, "CategoryId")}
                        value={form.CategoryId}>
                        {categories.map((c) => {
                            return <option value={c.id} key={c.id}>{c.name}</option>
                        })}
                        </select>
                    </div>
                        <div className="flex justify-end gap-3 pt-4">
                            <a
                            href="create.html"
                            className="px-5 py-3 rounded-xl bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                            >
                            Cancel
                            </a>
                            <button
                            className="px-5 py-3 rounded-xl bg-orange-500 text-white hover:bg-orange-600 transition shadow"
                            >
                            {nameProp}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}