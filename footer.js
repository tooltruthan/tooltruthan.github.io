document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("site-footer");

  if (!container) return;

  try {
    const response = await fetch("footer.html");

    if (!response.ok) {
      throw new Error("Không tải được footer.html");
    }

    container.innerHTML = await response.text();

    const currentYear = new Date().getFullYear();

    container.querySelectorAll(".footer-year").forEach(function (element) {
      element.textContent = currentYear;
    });
  } catch (error) {
    console.error("Lỗi tải chân trang:", error);
  }
});
