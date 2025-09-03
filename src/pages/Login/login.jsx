import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useProfile } from "../../context/profilecontext";

export  function Login() {
  const navigate = useNavigate();
  const { user, login } = useProfile();

  const [formData, setFormData] = useState({
    email: user?.email || "", // pre-fill with signup email
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // 1️⃣ Extract username from email (before @)
  const username = formData.email.split("@")[0];

  // 2️⃣ Generate avatar (using initials API)
  const avatar = `https://ui-avatars.com/api/?name=${username}&background=random&color=fff`;

  // 3️⃣ Save to context
  login(username, formData.email, avatar);

  // 4️⃣ Redirect to profile
  navigate("/profile");
};

  const isFormValid =
    formData.email.trim() !== "" && formData.password.trim() !== "";

  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-80 h-[650px] bg-white rounded-lg shadow-md p-6">
        <Link to="/">
          <button>
            <span className="material-symbols-outlined">arrow_left_alt</span>
          </button>
        </Link>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2 mt-3">
          Sign in to your PopX account
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Address */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Email Address <sup className="text-red-600">*</sup>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
              className="w-full p-2 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-purple-600">
              Password <sup className="text-red-600">*</sup>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
              className="w-full p-2 border-2 border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded-lg font-semibold transition mt-3
              ${
                isFormValid
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Login
          </button>
        </form>

        {/* Home Button */}
        <div className="flex justify-end items-center flex-col mt-10">
          <Link to="/">
            <button>
              <span className="material-symbols-outlined bg-purple-600 text-gray-300 rounded-full p-3 mt-20 text-4xl">
                home
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
