# Cấu trúc dự án React + Vite

## 📂 Cấu trúc thư mục

```
QuickProject-react/
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   └── giff/
│   │       └── react.svg
│   │
│   ├── components/
│   │   ├── BlogItem/
│   │   │   └── index.jsx
│   │   ├── Contentloader/
│   │   │   └── index.jsx
│   │   ├── CreateBlogForm/
│   │   │   └── index.jsx
│   │   ├── DialogChangeRole/
│   │   │   └── index.jsx
│   │   ├── Dialogdelete/
│   │   │   └── index.jsx
│   │   ├── DropdownMenuAuth/
│   │   │   └── index.jsx
│   │   ├── Footer/
│   │   │   └── index.jsx
│   │   ├── Header/
│   │   │   └── index.jsx
│   │   ├── HeroSection/
│   │   │   └── index.jsx
│   │   ├── Layout/
│   │   │   └── index.jsx
│   │   ├── LoginCard/
│   │   │   └── index.jsx
│   │   ├── ProtectedRoute/
│   │   │   └── index.jsx
│   │   ├── RegisterCard/
│   │   │   └── index.jsx
│   │   ├── Tablepost/
│   │   │   └── index.jsx
│   │   ├── UploadImage/
│   │   │   └── index.jsx
│   │   └── Usertable/
│   │       └── index.jsx
│   │
│   ├── contexts/
│   │
│   ├── lib/
│   │   ├── AuthContext.jsx
│   │   └── BlogContext.jsx
│   │
│   ├── pages/
│   │   ├── BlogDetails/
│   │   │   └── index.jsx
│   │   ├── CreateBlogs/
│   │   │   └── index.jsx
│   │   ├── Home/
│   │   │   └── index.jsx
│   │   ├── Login/
│   │   │   └── index.jsx
│   │   ├── MyPost/
│   │   │   └── index.jsx
│   │   ├── Register/
│   │   │   └── index.jsx
│   │   └── UserManagement/
│   │       └── index.jsx
│   │
│   ├── services/
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## ✅ Đã hoàn thành

### Components (16):
- BlogItem
- Contentloader
- CreateBlogForm
- DialogChangeRole
- Dialogdelete
- DropdownMenuAuth
- Footer
- Header
- HeroSection
- Layout
- LoginCard
- ProtectedRoute
- RegisterCard
- Tablepost
- UploadImage
- Usertable

### Pages (7):
- BlogDetails
- CreateBlogs
- Home
- Login
- MyPost
- Register
- UserManagement

### Contexts (lib):
- AuthContext.jsx
- BlogContext.jsx

### Utils:
- constants.js
- helpers.js

## 🚀 Sử dụng

Tất cả các component và page đã được tạo với cấu trúc cơ bản:

```jsx
const ComponentName = () => {
  return <div>ComponentName</div>
}

export default ComponentName
```

Bạn có thể bắt đầu phát triển từ đây!

## 📝 Lưu ý

- Tất cả code đã được xóa sạch, chỉ còn cấu trúc cơ bản
- Các file index.jsx đã sẵn sàng để code
- Cấu trúc thư mục giống y hệt như trong ảnh bạn đã gửi
