import { useNavigate } from "react-router-dom"
import { Navbar } from "../components/Navbar"
// Supports weights 300-700
import '@fontsource-variable/cormorant';

export const LandingPage = () => {
    const navigate = useNavigate();
    return <div className="">
        <Navbar />
        <div className="flex md:flex-row ">
            <div className="flex md:justify-between w-screen">

                <div className="w-1/2 font-Cormorant">
                    <div className="flex justify-center items-center p-10">
                        <h1 className="text-4xl md:text-7xl text-center ">Welcome
                            <br />
                            to a world of stories and insights waiting to inspire and engage you.
                        </h1>

                    </div>
                    <div className="flex justify-center w-full">
                        <button className="bg-[#201c1c] hover:bg-black text-white font-semibold py-2 px-4 border border-black rounded-full shadow" onClick={()=>{
                            navigate("/signup");
                        }}>
                            Let's begin!
                        </button>
                    </div>
                </div>
                <div className="flex-end md:block">
                    <img alt="" className="" src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png" width="460" height="600" loading="eager" />
                </div>
            </div>
        </div>
    </div>
}