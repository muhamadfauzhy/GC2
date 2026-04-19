import { useEffect, useState } from "react";
import ProduckCard from "../components/ProductCard";
import axios from "axios";
import baseUrl from "../constant/baseUrl";
import loadingGif from "../assets/loading.svg";

export default function Home() {
    const [cuisines, setCuisines] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [totalPage, setTotalPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const pagination = generatePages()  

    function generatePages () {
        let result = []
        for (let i = 1; i <= totalPage; i++) {
            result.push(i)
        }
        return result
    }

    async function fetchCuisines() {
        try {
                setLoading(true);
                const { data } = await axios.get(`${baseUrl}pub/cuisines?sort=id&search=${search}&page[number]=${currentPage}`);
                setCuisines(data.data);
                setTotalPage (data.totalPage)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }


    async function handleSearch(e) {
        e.preventDefault()
        fetchCuisines()
    }

        useEffect(() => {
        fetchCuisines();
        }, [currentPage]);

        if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
            <img src={loadingGif} className="w-32" alt="loading" />
            </div>
        );
        }

        return (
        <>
            <form className="flex flex-wrap gap-4 p-6" 
            onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border rounded-lg px-4 py-2 w-60"
                    value={search}
                    onChange={(e) => setSearch (e.target.value)}
                />
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {cuisines.map((cuisine) => {
                    return <ProduckCard cuisines={cuisine} key={cuisine.id} />;
                })}
            </div>

            <div className="flex justify-center gap-2 p-6">
                {pagination.map((page) => {
                    return(
                        <div key={page}>
                            <button
                                type="button"
                                    className={page === currentPage ? "min-h-[38px] min-w-[38px] flex justify-center items-center bg-orange-400 py-2 px-3 text-sm border-2 border-black rounded-lg " : "min-h-[38px] min-w-[38px] flex justify-center items-center rounded-lg border-2 border-black hover:bg-orange-400 hover:border-2 hover:border-black py-2 px-3 text-sm"}
                                    onClick={() => setCurrentPage(page)}>{page}
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    );
}