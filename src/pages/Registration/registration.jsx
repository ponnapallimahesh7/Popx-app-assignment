import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProfile } from "../../context/profilecontext";

export function Registration() {
  const navigate = useNavigate();
  const { login } = useProfile();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const displayName =
      formData.fullName.trim() || formData.email.split("@")[0] || "Guest";

    const avatar = `https://ui-avatars.com/api/?name=${displayName}&background=random&color=fff`;

    login(displayName, formData.email, avatar);

    navigate("/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className="w-80 bg-white p-6 rounded-lg shadow-md max-w-md">
        <Link to="/">
          <button>
            <span className="material-symbols-outlined">arrow_left_alt</span>
          </button>
        </Link>

        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Create your PopX Account
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Full Name <sup className="text-red-600">*</sup>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Phone Number <sup className="text-red-600">*</sup>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Email Address <sup className="text-red-600">*</sup>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Password <sup className="text-red-600">*</sup>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Enter your Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Are you an Agency? <sup className="text-red-600">*</sup>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                  required
                  className="accent-purple-600"
                />
                <span className="text-gray-700 text-sm">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                  required
                  className="accent-purple-600"
                />
                <span className="text-gray-700 text-sm">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 my-3 rounded-lg font-semibold hover:bg-purple-700"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
