import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className="container">
                <div className="not-found-content">
                    <h1 className="error-code">404</h1>
                    <h2>Không tìm thấy trang</h2>
                    <p>Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.</p>
                    <Link to="/" className="btn btn-primary">
                        Về trang chủ
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
