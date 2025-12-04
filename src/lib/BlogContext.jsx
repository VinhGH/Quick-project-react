import { createContext, useContext, useState } from 'react'

const BlogContext = createContext()

export const useBlog = () => {
    const context = useContext(BlogContext)
    if (!context) {
        throw new Error('useBlog must be used within BlogProvider')
    }
    return context
}

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchBlogs = async () => {
        setLoading(true)
        try {
            // Call API to fetch blogs
            // const data = await blogService.getBlogs()
            // setBlogs(data)
        } catch (error) {
            console.error('Error fetching blogs:', error)
        } finally {
            setLoading(false)
        }
    }

    const createBlog = async (blogData) => {
        try {
            // Call API to create blog
            // const newBlog = await blogService.createBlog(blogData)
            // setBlogs([...blogs, newBlog])
            console.log('Create blog:', blogData)
        } catch (error) {
            console.error('Error creating blog:', error)
        }
    }

    const updateBlog = async (id, blogData) => {
        try {
            // Call API to update blog
            console.log('Update blog:', id, blogData)
        } catch (error) {
            console.error('Error updating blog:', error)
        }
    }

    const deleteBlog = async (id) => {
        try {
            // Call API to delete blog
            setBlogs(blogs.filter((blog) => blog.id !== id))
        } catch (error) {
            console.error('Error deleting blog:', error)
        }
    }

    const value = {
        blogs,
        loading,
        fetchBlogs,
        createBlog,
        updateBlog,
        deleteBlog,
    }

    return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
}
