// Mock data for users
let mockUsers = [
    {
        id: 1,
        email: 'admin@example.com',
        username: 'Admin User',
        password: 'admin123',
        role: 'admin',
        accessToken: 'mock-admin-token-123'
    },
    {
        id: 2,
        email: 'user@example.com',
        username: 'Regular User',
        password: 'user123',
        role: 'user',
        accessToken: 'mock-user-token-456'
    }
];

// Helper to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const SignUpUser = async (userData) => {
    await delay(500);

    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === userData.email);
    if (existingUser) {
        throw {
            response: {
                status: 400,
                data: { message: 'User already exists' }
            }
        };
    }

    const newUser = {
        id: mockUsers.length + 1,
        email: userData.email,
        username: userData.username,
        password: userData.password,
        role: 'user',
        accessToken: `mock-token-${Date.now()}`
    };

    mockUsers.push(newUser);

    return {
        status: 201,
        data: {
            message: 'User registered successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                username: newUser.username,
                role: newUser.role
            }
        }
    };
};

export const login = async (userData) => {
    await delay(500);

    const user = mockUsers.find(
        u => u.email === userData.email && u.password === userData.password
    );

    if (!user) {
        throw {
            response: {
                status: 401,
                data: { message: 'Invalid email or password' }
            }
        };
    }

    return {
        status: 200,
        data: {
            accessToken: user.accessToken,
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role
            }
        }
    };
};

export const fetchUserProfile = async () => {
    await delay(300);

    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    const user = mockUsers.find(u => u.accessToken === userInfo.accessToken);

    if (!user) {
        throw {
            response: {
                status: 401,
                data: { message: 'Unauthorized' }
            }
        };
    }

    return {
        status: 200,
        data: {
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role
            }
        }
    };
};

export const logoutUser = async () => {
    await delay(300);

    return {
        status: 200,
        data: { message: 'Logged out successfully' }
    };
};

export const getAllUser = async () => {
    await delay(500);

    return {
        data: mockUsers.map(u => ({
            id: u.id,
            email: u.email,
            username: u.username,
            role: u.role
        }))
    };
};

export const deleteUser = async (id) => {
    await delay(500);

    const index = mockUsers.findIndex(u => u.id === id);
    if (index === -1) {
        throw {
            response: {
                status: 404,
                data: { message: 'User not found' }
            }
        };
    }

    mockUsers.splice(index, 1);

    return {
        status: 200,
        data: { message: 'User deleted successfully' }
    };
};

export const changeUserRole = async (id, role) => {
    await delay(500);

    const user = mockUsers.find(u => u.id === id);
    if (!user) {
        throw {
            response: {
                status: 404,
                data: { message: 'User not found' }
            }
        };
    }

    user.role = role;

    return {
        status: 200,
        data: {
            message: 'Role updated successfully',
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role
            }
        }
    };
};
