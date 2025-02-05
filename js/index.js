const pageName = document.documentElement.getAttribute("data-page-name");

document.querySelectorAll(".header-menu li").forEach((item) => {
  if (pageName === item.innerText) {
    item.classList.add("clicked");
  }
});
