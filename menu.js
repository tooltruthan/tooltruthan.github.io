
document.addEventListener("DOMContentLoaded", async function () {
  const menuContainer = document.getElementById("site-menu");

  if (!menuContainer) return;

  try {
    const response = await fetch("menu.html");

    if (!response.ok) {
      throw new Error("Không tải được menu.html");
    }

    menuContainer.innerHTML = await response.text();
  } catch (error) {
    console.error("Lỗi tải thanh menu:", error);
    menuContainer.innerHTML =
      '<p style="padding:12px;color:#f2c66d;text-align:center">Không tải được menu. Vui lòng tải lại trang.</p>';
  }
});
