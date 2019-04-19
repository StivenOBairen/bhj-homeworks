
const menuLinks = document.querySelectorAll("a.menu__link");

for (let link of Array.from(menuLinks)) {
  link.onclick = function() {
    const parent = link.parentElement;

      if (!parent.querySelector(".menu_sub").classList.contains("menu_active")) {
          parent.querySelector('.menu_sub').classList.add("menu_active");
      } else {
        parent.querySelector('.menu_sub').classList.remove("menu_active");
      }

      if (link.closest('.menu_main')) {
        return false;
      }
  }
}
