// Mock data for blogs
let mockBlogs = [
    {
        id: 1,
        title: 'Getting Started with React',
        content: 'React is a powerful JavaScript library for building user interfaces. In this post, we will explore the basics of React and how to get started with your first React application.',
        tags: ['React', 'JavaScript', 'Web Development'],
        author: 'Admin User',
        createdAt: '2024-01-15T10:30:00Z',
        image: 'https://via.placeholder.com/400x200/5044E5/FFFFFF?text=React'
    },
    {
        id: 2,
        title: 'Understanding Tailwind CSS',
        content: 'Tailwind CSS is a utility-first CSS framework that makes styling your applications faster and more efficient. Learn how to leverage Tailwind in your projects.',
        tags: ['CSS', 'Tailwind', 'Design'],
        author: 'Regular User',
        createdAt: '2024-01-20T14:15:00Z',
        image: 'https://via.placeholder.com/400x200/38BDF8/FFFFFF?text=Tailwind'
    },
    {
        id: 3,
        title: 'Modern JavaScript Features',
        content: 'Explore the latest features in modern JavaScript including async/await, destructuring, spread operators, and more. These features make your code cleaner and more maintainable.',
        tags: ['JavaScript', 'ES6', 'Programming'],
        author: 'Admin User',
        createdAt: '2024-02-01T09:00:00Z',
        image: 'https://via.placeholder.com/400x200/F7DF1E/000000?text=JavaScript'
    }
];

// Helper to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const GetAllBlog = async () => {
    await delay(800);
    return {
        data: mockBlogs
    };
};

export const GetBlogById = async (id) => {
    await delay(500);
    const blog = mockBlogs.find(b => b.id === parseInt(id));

    if (!blog) {
        throw {
            response: {
                status: 404,
                data: { message: 'Blog not found' }
            }
        };
    }

    return {
        data: blog
    };
};

export const CreateBlog = async (blogData) => {
    await delay(500);

    const newBlog = {
        id: mockBlogs.length + 1,
        ...blogData,
        createdAt: new Date().toISOString(),
        author: JSON.parse(localStorage.getItem('userInfo') || '{}').username || 'Anonymous'
    };

    mockBlogs.unshift(newBlog);

    return {
        data: newBlog
    };
};

export const DeleteBlog = async (id) => {
    await delay(500);

    const index = mockBlogs.findIndex(b => b.id === parseInt(id));
    if (index === -1) {
        throw {
            response: {
                status: 404,
                data: { message: 'Blog not found' }
            }
        };
    }

    mockBlogs.splice(index, 1);

    return {
        data: { message: 'Blog deleted successfully' }
    };
};
