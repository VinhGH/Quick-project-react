/**
 * Format số thành định dạng tiền tệ VND
 * @param {number} amount - Số tiền
 * @returns {string} Chuỗi định dạng tiền tệ
 */
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(amount)
}

/**
 * Format ngày tháng
 * @param {Date|string} date - Ngày cần format
 * @param {string} locale - Locale (mặc định: 'vi-VN')
 * @returns {string} Chuỗi ngày đã format
 */
export const formatDate = (date, locale = 'vi-VN') => {
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date))
}

/**
 * Format thời gian tương đối (vd: "2 giờ trước")
 * @param {Date|string} date - Ngày cần format
 * @returns {string} Chuỗi thời gian tương đối
 */
export const formatRelativeTime = (date) => {
    const now = new Date()
    const past = new Date(date)
    const diffInSeconds = Math.floor((now - past) / 1000)

    if (diffInSeconds < 60) return 'vừa xong'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} phút trước`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} giờ trước`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} ngày trước`

    return formatDate(date)
}

/**
 * Truncate text với ellipsis
 * @param {string} text - Text cần truncate
 * @param {number} maxLength - Độ dài tối đa
 * @returns {string} Text đã truncate
 */
export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
}

/**
 * Debounce function
 * @param {Function} func - Function cần debounce
 * @param {number} delay - Thời gian delay (ms)
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay = 300) => {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func(...args), delay)
    }
}

/**
 * Validate email
 * @param {string} email - Email cần validate
 * @returns {boolean} True nếu email hợp lệ
 */
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

/**
 * Generate random ID
 * @returns {string} Random ID
 */
export const generateId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
