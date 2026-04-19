export default function CategoryPage() {
    return(
        <>
        {/* Tabel category */}
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">No</th>
              <th className="p-3 text-left">Category Name</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3">1</td>
              <td className="p-3">Indonesian Food</td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-2">Delete</button>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3">2</td>
              <td className="p-3">Thai Food</td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-2">Delete</button>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3">3</td>
              <td className="p-3">Vietnamese Food</td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-2">Delete</button>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3">4</td>
              <td className="p-3">Malaysian Food</td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-2">Delete</button>
              </td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-3">5</td>
              <td className="p-3">Singaporean Food</td>
              <td className="p-3">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        </>
    )
}