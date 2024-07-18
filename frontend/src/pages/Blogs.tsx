import { Appbar } from "../components/Appbar"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"
import { BlogCard } from "./BlogCard"

export const Blogs = () => {
    const {loading, blogs} = useBlogs();

    if(loading){
        return <div className="flex justify-center items-center h-screen">
            <div className="">
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            </div>
        </div>
    }

    return <div className="">
        <Appbar />
        <div className="flex justify-center">

        <div className="">
            {blogs.map(blog => <BlogCard
                id={blog.id}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate={"2nd Feb 2024"}
                />)}
            
                </div>
        </div>
    </div>
}