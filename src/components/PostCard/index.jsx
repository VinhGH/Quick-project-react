import React from "react";
import { Link } from "react-router-dom";
import ContentLoader from "react-content-loader";

// PostCard Skeleton Loader
export const PostCardSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={380}
        viewBox="0 0 300 380"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="dark:bg-[#2a2a2a] dark:foreground-[#3a3a3a]"
        {...props}
    >
        {/* Image */}
        <rect x="0" y="0" rx="12" ry="12" width="300" height="180" />
        {/* Tags */}
        <rect x="16" y="200" rx="12" ry="12" width="60" height="24" />
        <rect x="84" y="200" rx="12" ry="12" width="70" height="24" />
        {/* Title */}
        <rect x="16" y="240" rx="4" ry="4" width="268" height="20" />
        {/* Description */}
        <rect x="16" y="276" rx="4" ry="4" width="268" height="14" />
        <rect x="16" y="296" rx="4" ry="4" width="240" height="14" />
        <rect x="16" y="316" rx="4" ry="4" width="200" height="14" />
        {/* Author & Date */}
        <circle cx="28" cy="356" r="12" />
        <rect x="48" y="348" rx="4" ry="4" width="100" height="12" />
        <rect x="200" y="348" rx="4" ry="4" width="84" height="12" />
    </ContentLoader>
);

// Helper function to strip HTML tags
function stripHTML(input) {
    if (typeof input !== "string") return "";
    const temp = document.createElement("div");
    temp.innerHTML = input;
    return temp.textContent || temp.innerText || "";
}

// PostCard Component
const PostCard = ({ blog, loading = false }) => {
    if (loading) {
        return <PostCardSkeleton />;
    }

    if (!blog) {
        return null;
    }

    return (
        <Link
            to={`/blog-details/${blog._id}`}
            className="group block rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg 
        bg-white dark:bg-[#111111] dark:border-[#222] dark:shadow-none transition-all duration-300"
        >
            {/* Image */}
            <div className="overflow-hidden rounded-t-xl bg-gray-50 dark:bg-gray-800">
                <img
                    src={blog.image || "/placeholder-image.jpg"}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between min-h-[200px]">
                {/* Tags */}
                {Array.isArray(blog.tags) && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center justify-center 
                  px-3 py-1 rounded-full text-xs font-medium
                  bg-[#E8E7FF] text-[#5044E5] 
                  dark:bg-[#3E357A] dark:text-[#DAD3FF]
                  border border-[#5044E580] dark:border-[#7D6CFF80]
                  shadow-sm transition-colors duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                    {stripHTML(blog.content) || "Không có nội dung hiển thị."}
                </p>

                {/* Author & Date */}
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto">
                    <div className="flex items-center gap-2">
                        {blog.author?.avatar && (
                            <img
                                src={blog.author.avatar}
                                alt={blog.author.name}
                                className="w-6 h-6 rounded-full"
                            />
                        )}
                        <span className="font-medium">{blog.author?.name || "Anonymous"}</span>
                    </div>
                    {blog.createdAt && (
                        <span>{new Date(blog.createdAt).toLocaleDateString("vi-VN")}</span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default PostCard;
