import { useState } from "react"
import { NavLink } from "react-router";
import baseUrl from "../constant/baseUrl";

export default function ProduckCard ({cuisines}) {

    return (
        <>
            {/* Card */}
                    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
                    <img
                        src={cuisines.imgUrl}
                        className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    <h2 className="text-lg font-semibold">{cuisines.name}</h2>
                    <p className="text-sm text-gray-500">Rp {cuisines.price}</p>
                    <NavLink to={`/detail/${cuisines.id}`} className="mt-3 text-orange-500 hover:underline">Detail</NavLink>
                    </div>
        </>
    )
}