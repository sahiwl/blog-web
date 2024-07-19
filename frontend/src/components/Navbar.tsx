import { Link, useNavigate } from "react-router-dom"


export const Navbar = () => {
    const navigate = useNavigate();

    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={''} className="flex flex-col justify-center">
            <h2 className="text-3xl font-Cormorant">BlogOut</h2>
        </Link>
        <div className="flex flex-row justify-between space-x-5">
            <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={() => {
                navigate("/publish");
            }}>New</button>
            <NavAvatar />
        </div>
    </div>
}
  
  const NavAvatar= ()=> {
    return (
      <div className="">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <svg type="button" 
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  };