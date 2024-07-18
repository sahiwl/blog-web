import { Avatar } from "../pages/BlogCard"

export const Appbar = ()=>{
    return <div className="border-b flex justify-between px-10 py-4">
            <div className="flex flex-col justify-center">Medium</div>
            <div className=""><Avatar size={"big"} name="Sahil"/></div>
    </div>
}