// Đợi cho đến khi tài liệu được tải xong
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        autoplay: {
            delay: 3000, // Thay đổi slide mỗi 3 giây
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const backToTopButton = document.getElementById('back-to-top');

    // Hiển thị hoặc ẩn nút dựa trên vị trí cuộn
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'flex'; // Hiển thị nút
            backToTopButton.classList.add("show"); // Thêm lớp show
        } else {
            backToTopButton.style.display = 'none'; // Ẩn nút
            backToTopButton.classList.remove("show"); // Xóa lớp show
        }
    });

    // Cuộn về đầu trang khi nút được nhấn
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Cuộn mượt về đầu trang
        });
    });
});

// Hàm để làm tăng số
function countUp(element, target) {
    let count = 0; // Giá trị bắt đầu
    const increment = Math.ceil(target / 100); // Giá trị tăng dần
    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target; // Đảm bảo không vượt quá giá trị mục tiêu
            clearInterval(interval); // Dừng hàm
        }
        element.textContent = count; // Cập nhật số
    }, 10); // Tốc độ tăng
}

// Khi tài liệu đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    countUp(document.getElementById('customers'), 2536); // Tăng số khách
    countUp(document.getElementById('trips'), 560); // Tăng số chuyến đi
    countUp(document.getElementById('locations'), 132); // Tăng số địa điểm
});

