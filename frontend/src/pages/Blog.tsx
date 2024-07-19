import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navbar";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({
        id: id || ""
    });
    if (loading || !blog) {
        return <div>
            <Navbar />
            <div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Loading />
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog} />
    </div>
}

