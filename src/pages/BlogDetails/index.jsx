import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetBlogById } from "@/services/api/blog";
import { Spinner } from "@/components/ui/spinner";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                setLoading(true);
                const data = await GetBlogById(id);
                console.log("Blog chi tiết:", data);
                setBlog(data);
            } catch (err) {
                console.error("Lỗi khi tải blog:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    if (loading)
        return (
            <div className="flex justify-center items-center min-h-[70vh]">
                <Spinner size="lg" className="text-primary" />
            </div>
        );

    if (!blog)
        return (
            <p className="text-center mt-10 text-muted-foreground">
                Không tìm thấy bài viết
            </p>
        );

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            {/* Date - Top */}
            {blog.createdAt && (
                <p className="text-center text-sm text-[#5044E5] font-medium mb-3">
                    Published on {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}
                </p>
            )}

            {/* Title - Centered, Large */}
            <h1 className="text-5xl font-bold text-center mb-4 leading-tight">
                {blog.title}
            </h1>

            {/* Author Badge - Below title, centered */}
            <div className="flex justify-center mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                    {typeof blog.author === "object"
                        ? blog.author.username || blog.author.email || "Admin"
                        : blog.author || "Admin"}
                </span>
            </div>

            {/* Image - Centered */}
            {blog.image && (
                <div className="flex justify-center mb-4">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="rounded-lg max-w-2xl w-full h-auto object-cover shadow-md"
                    />
                </div>
            )}


            {/* Subtitle - Centered, below image */}
            <h2 className="text-2xl font-semibold text-center mb-6">
                {blog.title}
            </h2>

            {/* Content - Left aligned */}
            <div
                className="prose prose-lg max-w-none text-foreground leading-relaxed"
                dangerouslySetInnerHTML={{
                    __html: typeof blog.content === "string"
                        ? blog.content
                        : "Nội dung bài viết hiện đang trống hoặc không khả dụng."
                }}
            />

            {/* Updated date */}
            {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                <p className="text-center text-xs text-muted-foreground mt-8 pt-4 border-t">
                    Last updated on {new Date(blog.updatedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}
                </p>
            )}
        </div>
    );
};

export default BlogDetail;
