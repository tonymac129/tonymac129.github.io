document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".drop-title");
  const filter = document.querySelector(".filter-menu");
  let filterMenu = filter.parentElement.querySelector(".dropdown");
  dropdowns.forEach((menu) => {
    let dropmenu = menu.parentElement.querySelector(".dropdown");
    menu.addEventListener("click", () => {
      dropmenu.style.opacity = "1";
      dropmenu.style.visibility = "visible";
    });
    document.addEventListener("click", (e) => {
      if (e.target != menu) {
        dropmenu.style.opacity = "0";
        dropmenu.style.visibility = "hidden";
      }
    });
  });
  filter.addEventListener("click", () => {
    filterMenu.style.opacity = "1";
    filterMenu.style.visibility = "visible";
  });
  document.addEventListener("click", (e) => {
    if (e.target != filter) {
      filterMenu.style.opacity = "0";
      filterMenu.style.visibility = "hidden";
    }
  });
});
