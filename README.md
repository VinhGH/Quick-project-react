# QuickProject React - Blog Application

Ứng dụng Blog được xây dựng với React + Vite, có đầy đủ tính năng quản lý bài viết và người dùng.

## 🚀 Tính năng

### Người dùng
- ✅ Đăng ký / Đăng nhập
- ✅ Xem danh sách bài viết
- ✅ Xem chi tiết bài viết
- ✅ Tạo bài viết mới
- ✅ Quản lý bài viết của mình
- ✅ Upload hình ảnh

### Admin
- ✅ Quản lý người dùng
- ✅ Thay đổi vai trò người dùng
- ✅ Xóa người dùng
- ✅ Xem thống kê

## 📁 Cấu trúc thư mục

```
src/
├── components/              # Components
│   ├── BlogItem/           # Component hiển thị blog item
│   ├── Contentloader/      # Loading component
│   ├── CreateBlogForm/     # Form tạo blog
│   ├── DialogChangeRole/   # Dialog thay đổi role
│   ├── Dialogdelete/       # Dialog xác nhận xóa
│   ├── DropdownMenuAuth/   # Menu dropdown user
│   ├── Footer/             # Footer component
│   ├── Header/             # Header component
│   ├── HeroSection/        # Hero section
│   ├── Layout/             # Main layout
│   ├── LoginCard/          # Card đăng nhập
│   ├── ProtectedRoute/     # Protected route wrapper
│   ├── RegisterCard/       # Card đăng ký
│   ├── Tablepost/          # Table hiển thị posts
│   ├── UploadImage/        # Upload image component
│   ├── Usertable/          # Table hiển thị users
│   ├── common/             # Common components
│   └── ui/                 # UI components
├── pages/                  # Pages
│   ├── BlogDetails/        # Trang chi tiết blog
│   ├── CreateBlogs/        # Trang tạo blog
│   ├── Home/               # Trang chủ
│   ├── Login/              # Trang đăng nhập
│   ├── MyPost/             # Trang bài viết của tôi
│   ├── Register/           # Trang đăng ký
│   ├── UserManagement/     # Trang quản lý users
│   ├── About/              # Trang giới thiệu
│   └── NotFound/           # Trang 404
├── lib/                    # Contexts
│   ├── AuthContext.jsx     # Authentication context
│   └── BlogContext.jsx     # Blog context
├── services/               # API Services
│   ├── api.js              # Axios instance
│   ├── userService.js      # User API
│   ├── blogService.js      # Blog API
│   └── adminService.js     # Admin API
├── hooks/                  # Custom hooks
│   ├── useFetch.js         # Fetch hook
│   └── useLocalStorage.js  # LocalStorage hook
├── utils/                  # Utilities
│   ├── helpers.js          # Helper functions
│   └── constants.js        # Constants
├── assets/                 # Assets
│   ├── images/             # Images
│   ├── giff/               # GIFs
│   └── icons/              # Icons
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 🛠️ Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd QuickProject-react
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Tạo file `.env`:
```bash
cp .env.example .env
```

4. Cấu hình `.env`:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

5. Chạy development server:
```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

## 📜 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build
- `npm run lint` - Chạy ESLint

## 🔐 Authentication

Ứng dụng sử dụng JWT token để xác thực:
- Token được lưu trong localStorage
- Tự động thêm token vào header của mọi request
- Tự động redirect về login khi token hết hạn

## 🎨 Styling

- CSS Variables cho theming
- Responsive design
- Dark mode support
- Component-scoped CSS

## 📡 API Integration

### Services
- `authService` - Xác thực (login, register, logout)
- `blogService` - Quản lý blog (CRUD operations)
- `userService` - Quản lý user
- `adminService` - Chức năng admin

### Example Usage:
```javascript
import { blogService } from '@services/blogService'

// Lấy danh sách blogs
const blogs = await blogService.getBlogs()

// Tạo blog mới
const newBlog = await blogService.createBlog({
  title: 'My Blog',
  content: 'Content here...'
})
```

## 🔒 Protected Routes

Routes yêu cầu authentication:
- `/create-blog` - Tạo bài viết
- `/my-posts` - Bài viết của tôi
- `/admin/users` - Quản lý users (Admin only)

## 🎯 Context API

### AuthContext
```javascript
import { useAuth } from '@lib/AuthContext'

const { user, login, logout } = useAuth()
```

### BlogContext
```javascript
import { useBlog } from '@lib/BlogContext'

const { blogs, createBlog, deleteBlog } = useBlog()
```

## 🧩 Components

### Common Components
- `Header` - Navigation bar với auth menu
- `Footer` - Footer với links
- `Layout` - Main layout wrapper

### Feature Components
- `CreateBlogForm` - Form tạo/sửa blog
- `BlogItem` - Card hiển thị blog
- `Tablepost` - Table hiển thị posts
- `Usertable` - Table hiển thị users
- `UploadImage` - Upload và preview image
- `ProtectedRoute` - Route guard

### Dialog Components
- `DialogChangeRole` - Thay đổi role user
- `Dialogdelete` - Xác nhận xóa

## 📱 Responsive Design

Ứng dụng được tối ưu cho:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Deployment

Build production:
```bash
npm run build
```

Preview build:
```bash
npm run preview
```

## � License

MIT License

---

Made with ❤️ using React + Vite
