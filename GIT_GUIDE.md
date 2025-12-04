# Hướng dẫn Push Code lên GitHub

## Repository: https://github.com/VinhGH/Quick-project-react

### Bước 1: Khởi tạo Git (nếu chưa có)
```bash
git init
```

### Bước 2: Thêm remote repository
```bash
git remote add origin https://github.com/VinhGH/Quick-project-react.git
```

Hoặc nếu đã có remote, cập nhật lại:
```bash
git remote set-url origin https://github.com/VinhGH/Quick-project-react.git
```

### Bước 3: Kiểm tra trạng thái
```bash
git status
```

### Bước 4: Thêm tất cả file vào staging
```bash
git add .
```

### Bước 5: Commit code
```bash
git commit -m "Initial commit: React + Vite project structure"
```

### Bước 6: Đổi tên branch sang main (nếu cần)
```bash
git branch -M main
```

### Bước 7: Push code lên GitHub
```bash
git push -u origin main
```

Nếu repository đã có code, dùng force push (cẩn thận!):
```bash
git push -u origin main --force
```

---

## 🔐 Nếu yêu cầu đăng nhập:

### Cách 1: Sử dụng Personal Access Token (Khuyến nghị)

1. Vào GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Chọn quyền: `repo` (full control)
4. Copy token
5. Khi push, nhập:
   - Username: `VinhGH`
   - Password: `<paste token ở đây>`

### Cách 2: Sử dụng SSH

1. Tạo SSH key:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. Copy public key:
```bash
type %USERPROFILE%\.ssh\id_ed25519.pub
```

3. Thêm vào GitHub → Settings → SSH and GPG keys → New SSH key

4. Đổi remote URL:
```bash
git remote set-url origin git@github.com:VinhGH/Quick-project-react.git
```

---

## 📝 Các lệnh Git hữu ích:

### Kiểm tra remote
```bash
git remote -v
```

### Xem lịch sử commit
```bash
git log --oneline
```

### Pull code mới nhất
```bash
git pull origin main
```

### Tạo branch mới
```bash
git checkout -b feature/new-feature
```

### Push branch mới
```bash
git push -u origin feature/new-feature
```

---

## ⚠️ Lưu ý:

1. **Đừng commit file `.env`** - Đã có trong `.gitignore`
2. **Đừng commit `node_modules`** - Đã có trong `.gitignore`
3. Luôn pull trước khi push nếu làm việc nhóm
4. Viết commit message rõ ràng

---

## 🎯 Quick Commands (Copy & Paste):

```bash
# Lần đầu tiên
git init
git remote add origin https://github.com/VinhGH/Quick-project-react.git
git add .
git commit -m "Initial commit: React + Vite project structure"
git branch -M main
git push -u origin main

# Các lần sau
git add .
git commit -m "Your commit message"
git push
```
