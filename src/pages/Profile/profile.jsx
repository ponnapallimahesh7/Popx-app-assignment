import { useProfile } from "../../context/profilecontext";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const { user, logout, avatar } = useProfile();
  const navigate = useNavigate();

  if (!user) {
    return (
      <p className="text-center text-gray-600 mt-10">
        Please login or register first.
      </p>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center font-sans">
      <div className="w-80 h-[650px] bg-white p-6 max-w-md rounded-lg shadow-md">
        {/* Header */}
        <div className="border-b py-4">
          <h2 className="text-gray-700 font-semibold">Account Settings</h2>
        </div>

        {/* Profile Info */}
        <div className="py-6 flex items-center">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-16 h-16 border-2 rounded-full object-cover"
            />
            {/* Small icon on photo */}
            <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-2 w-2 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Name + Email */}
          <div className="ml-2 max-w-[200px]">
            <h3 className="text-gray-800 font-semibold break-words">
              {user.username}
            </h3>
            <p className="text-sm text-gray-500 break-words">{user.email}</p>
          </div>
        </div>

        {/* Description */}
        <div className="pb-6 text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam.
        </div>

        {/* Logout Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
