import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    id: number;
}



export const BlogCard = ({
    id,
    authorName,
    title,
    content,

}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}> 
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
            <div className="flex">
                <Avatar name={authorName} />
            </div>
            <div className="flex justify-center flex-col font-extralight pl-2 text-sm">{authorName} </div>
        </div> 
        <div className="text-xl font-semibold pt-2">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin mb-1 pt-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
        
    </div>
    </Link>
}

export function Avatar({ name, size ="small"}: { name: any, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`${size === "small" ? "text-xs" : "text-md"} text-gray-600 dark:text-gray-300`}>
            {name[0]}
        </span>
    </div>
}