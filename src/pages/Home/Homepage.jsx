// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Registration } from "../Registration/registration";

export function Homepage() {
  // const navigate = useNavigate();

  //     const onclickcreateAccount = () => {
  //     navigate('/registration')
  //   }
  return (
    <>
      <div className="font-sans min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-80 h-[600px] bg-white rounded-lg shadow-md flex flex-col justify-end p-6">
          <h1 className="text-2xl text-gray-700 font-semibold mb-2">
            Welcome to PopX
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <Link to="/register">
            <button className="w-full  bg-[#6C25FF]  text-white py-2 rounded-md font-semibold mb-3 hover:bg-purple-700">
              Create Account
            </button>
          </Link>

          <Link to="/login">
            <button className="w-full bg-purple-200 text-gray-800 py-2 rounded-md  hover:bg-purple-300">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Homepage;
