export default function ImagePage() { 
    return(
        <>
            {/* Upload image */}
            <div className="max-w-xl mx-auto pt-32 px-6">
                <div className="bg-white rounded-2xl shadow p-6 text-center">
                    {/* Title */}
                    <h2 className="text-xl font-bold mb-2">Nasi Goreng</h2>
                    <p className="text-sm text-gray-500 mb-4">Update menu image</p>
                    {/* Current Image */}
                    <img
                    src="https://dimsimlim.com/wp-content/uploads/2024/12/Spicy-Nasi-Goreng-1.jpg"
                    className="w-full h-60 object-cover rounded-xl mb-4"
                    />
                    {/* Form */}
                    <form>
                        <div>
                            <input
                            type="text"
                            name="imgUrl"
                            placeholder="Update image here"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div className="flex justify-center gap-3">
                            <a
                            href="image.html"
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                            >
                            Cancel
                            </a>
                            <a
                            href="Home.html"
                            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                            >
                            Upload
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}