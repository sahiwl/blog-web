import { Appbar } from "../components/Appbar"
import { BlogCard } from "./BlogCard"

export const Blogs = () => {
    return <div className="">
        <Appbar />
        <div className="flex justify-center">

        <div className="max-w-xl ">
            <BlogCard
                authorName={"Sahil"}
                title={"How an ugly single page website makes $5000 a month without an affiliate marketing"}
                content={"How an ugly single page website makes $5000 a month without an affiliate marketing"}
                publishedDate={"2nd Feb 2024"}
                />
            <BlogCard
                authorName={"Sahil"}
                title={"How an ugly single page website makes $5000 a month without an affiliate marketing"}
                content={"How an ugly single page website makes $5000 a month without an affiliate marketing"}
                publishedDate={"2nd Feb 2024"}
                />
            <BlogCard
                authorName={"Sahil"}
                title={"How an ugly single page website makes $5000 a month without an affiliate marketing"}
                content={"How an ugly single page website makes $5000 a month without an affiliate marketing"}
                publishedDate={"2nd Feb 2024"}
                />
                </div>
        </div>
    </div>
}