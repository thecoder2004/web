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
