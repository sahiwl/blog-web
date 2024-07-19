import { SignupInput } from "@sahiwl/medium-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL} from "../config"
import axios from "axios"

//trpc - for extremely strict types
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })
  
    async function sendRequest(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt); 
            //@ts-ignore
            localStorage.setItem("email",postInputs.username);
            //@ts-ignore
            localStorage.setItem("user",postInputs.name);
            navigate("/blogs")
        } catch(e){
            //alert the user here that the request failed 
            alert("Error while signing up");
            console.log("Error detected: " + e);
            
        }
    }

    return (
        <>
            <div className="h-screen flex justify-center flex-col">
                {/* {JSON.stringify(postInputs)} */}
                <div className="flex justify-center">
                    <div className="">
                        <div className="px-10">
                            <div className="text-4xl font-bold">
                                Create an Account
                            </div>
                            <div className="text-slate-500">
                                {type === "signin" ? "Don't have an account? " : "Already have an account? "}
                                <Link className="pt-2 underline" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin"? "Sign up" : "Sign in"}</Link>
                            </div>
                        </div>
                        <div className="pt-8">

                            {type=== "signup"? <LabelledInput label="Name" placeholder="Enter your name" onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                })
                            }} />: null} 
                            <LabelledInput label="Username" placeholder="Enter your email" onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    username: e.target.value,
                                })
                            }} />
                            <LabelledInput label="password"  type="password" placeholder="Enter your password" onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    password: e.target.value
                                })
                            }} />
                            <button onClick={sendRequest} type="button" className="w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signin" ? "Sign in" : "Sign up"  }</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}