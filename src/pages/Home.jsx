import './Home.css'

const Home = () => {
    return (
        <div className="home-page">
            <div className="container">
                <section className="hero">
                    <h1 className="hero-title">
                        Chào mừng đến với <span className="gradient-text">QuickProject</span>
                    </h1>
                    <p className="hero-description">
                        Một ứng dụng React hiện đại được xây dựng với Vite,
                        mang đến hiệu suất tối ưu và trải nghiệm phát triển tuyệt vời.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary">Bắt đầu ngay</button>
                        <button className="btn btn-secondary">Tìm hiểu thêm</button>
                    </div>
                </section>

                <section className="features">
                    <h2>Tính năng nổi bật</h2>
                    <div className="features-grid">
                        <div className="feature-card card">
                            <div className="feature-icon">⚡</div>
                            <h3>Cực kỳ nhanh</h3>
                            <p>Vite cung cấp HMR siêu nhanh và build time tối ưu</p>
                        </div>

                        <div className="feature-card card">
                            <div className="feature-icon">🎨</div>
                            <h3>Thiết kế đẹp</h3>
                            <p>Giao diện hiện đại với CSS variables và dark mode</p>
                        </div>

                        <div className="feature-card card">
                            <div className="feature-icon">🔧</div>
                            <h3>Dễ tùy chỉnh</h3>
                            <p>Cấu trúc rõ ràng, dễ dàng mở rộng và bảo trì</p>
                        </div>

                        <div className="feature-card card">
                            <div className="feature-icon">📱</div>
                            <h3>Responsive</h3>
                            <p>Hoạt động mượt mà trên mọi thiết bị</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
