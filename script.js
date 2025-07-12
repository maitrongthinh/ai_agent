// File script.js cho ứng dụng Trợ lý Học tập AI - Phiên bản Nâng cấp

console.log("Upgraded Script loaded!");

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed.");

    // --- Nội dung placeholder "đẳng cấp" hơn ---

    const studyPlanDiv = document.getElementById('study-plans-display');
    studyPlanDiv.innerHTML = `
        <div class="placeholder-item">
            <h4>Tuần 1: Nhập môn Machine Learning</h4>
            <p>Trạng thái: <span>Đang tiến hành</span></p>
        </div>
        <div class="placeholder-item inactive">
            <h4>Tuần 2: Tìm hiểu về Deep Learning</h4>
            <p>Trạng thái: <span>Chưa bắt đầu</span></p>
        </div>
    `;
    
    const reportOutlineDiv = document.getElementById('report-outlines-display');
    reportOutlineDiv.innerHTML = `
        <div class="placeholder-item">
            <h4>Báo cáo: Ứng dụng AI trong Y tế</h4>
            <p>Số mục: <span>5/5</span></p>
        </div>
    `;

    // Thêm một chút CSS động để làm đẹp cho placeholder
    const style = document.createElement('style');
    style.innerHTML = `
        .placeholder-item {
            background-color: rgba(255, 255, 255, 0.05);
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 3px solid var(--primary-color);
        }
        .placeholder-item.inactive {
            border-left-color: var(--text-secondary-color);
        }
        .placeholder-item h4 {
            margin: 0 0 0.5rem 0;
            color: var(--text-color);
            font-weight: 500;
        }
        .placeholder-item p {
            margin: 0;
            font-size: 0.9rem;
            color: var(--text-secondary-color);
        }
        .placeholder-item p span {
            font-weight: bold;
            color: var(--primary-color);
        }
        .placeholder-item.inactive p span {
            color: var(--text-secondary-color);
        }
    `;
    document.head.appendChild(style);
});

// Hướng dẫn nhúng FPT AI Agent vẫn như cũ:
// Dán mã <script> từ FPT AI ngay trước thẻ đóng </body> trong file index.html.
