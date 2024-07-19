import { Navbar } from "../components/Navbar"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"
import { BlogCard } from "./BlogCard"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="">
                <BlogSkeleton />
                <BlogSkeleton />
                <BlogSkeleton />
            </div>
        </div>
    }

    return <div className="">
        <Navbar />
        <div className="flex justify-center">

            <div className="">
                {blogs
                    .slice() //copy of the blogs array  
                    .sort((a, b) => b.id - a.id) // Sorting the array in descending order 
                    .map(blog => (
                        <BlogCard
                            key={blog.id}
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                        />
                    ))}
            </div>
        </div>
    </div>
}