// Đảm bảo code chỉ chạy sau khi toàn bộ HTML đã được tải xong
document.addEventListener("DOMContentLoaded", function () {
  // 1. Lấy ra các phần tử từ HTML bằng ID
  const toggleButton = document.getElementById("toggle-button");
  const contentBox = document.getElementById("content-box");

  // 2. Lắng nghe sự kiện "click" trên nút bấm
  toggleButton.addEventListener("click", () => {
    // 3. ✨ Logic chính: Kiểm tra trạng thái display hiện tại và đảo ngược nó ✨

    // Lấy ra giá trị display hiện tại của box
    const currentDisplay = window.getComputedStyle(contentBox).display;

    if (currentDisplay === "none") {
      // Nếu box đang bị ẩn (display là 'none')
      // thì đổi nó thành 'block' để hiện ra
      contentBox.style.display = "block";
    } else {
      // Ngược lại, nếu box đang hiển thị (display là 'block' hoặc giá trị khác)
      // thì đổi nó thành 'none' để ẩn đi
      contentBox.style.display = "none";
    }
  });
});

const goHome = () => {
  const homeView = document.getElementById("main_page");
  const watchView = document.getElementById("watch_page");
  const classToRemove = "hidden";
  if (homeView.classList.contains(classToRemove)) {
    homeView.classList.remove(classToRemove);
  }
  if (!watchView.classList.contains(classToRemove)) {
    watchView.classList.add(classToRemove);
  }
};
const goWatch = () => {
  const homeView = document.getElementById("main_page");
  const watchView = document.getElementById("watch_page");
  const classToRemove = "hidden";
  if (watchView.classList.contains(classToRemove)) {
    watchView.classList.remove(classToRemove);
  }
  if (!homeView.classList.contains(classToRemove)) {
    homeView.classList.add(classToRemove);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // 1. Tìm tất cả các phần tử có class 'content__video_item'
  const allVideoItems = document.querySelectorAll(".content__video_item");

  // 2. Lặp qua từng phần tử trong danh sách vừa tìm được
  allVideoItems.forEach((item) => {
    // 3. Gắn một sự kiện 'click' cho mỗi phần tử (item)
    item.addEventListener("click", () => {
      // Đây là hành động sẽ xảy ra khi một item được click
      goWatch();
      // Ví dụ, bạn có thể lấy tiêu đề của video được click
      // const title = item.querySelector('.video_item_title').textContent;
      // alert(`Bạn đã chọn xem video: ${title}`);
    });
  });
});
