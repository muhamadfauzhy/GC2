import { useState } from "react";
import axios from "axios";
import baseUrl from "../constant/baseUrl";
import Toastify from "toastify-js";

export default function AddUserPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  function handleChange(value, field) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post(`${baseUrl}add-user`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });

      Toastify({
        text: "Success add staff",
        duration: 3000,
        style: {
          background: "green",
        },
      }).showToast();

    } catch (error) {
      Toastify({
        text: error.response?.data?.message || "Error",
        duration: 3000,
        style: {
          background: "red",
        },
      }).showToast();
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Add Staff</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              value={form.email}
              onChange={(e) => handleChange(e.target.value, "email")}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={form.password}
              onChange={(e) => handleChange(e.target.value, "password")}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={form.phoneNumber}
              onChange={(e) => handleChange(e.target.value, "phoneNumber")}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm mb-1">Address</label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg"
              value={form.address}
              onChange={(e) => handleChange(e.target.value, "address")}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
          >
            Add Staff
          </button>
        </form>
      </div>
    </div>
  );
}