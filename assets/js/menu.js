document.addEventListener("DOMContentLoaded", function(){
  const btn = document.getElementById("menu_button_wrapper");
  const menu = document.getElementById("mobile_menu_content");
  const toggleButton = function () {
    btn.classList.toggle('opened');
    btn.setAttribute('aria-expanded', btn.classList.contains('opened'));
  }
  const openMenu = function () {
    menu.classList.add("open");
    document.body.classList.add("static");
  }
  const closeMenu = function () {
    menu.classList.remove("open");
    document.body.classList.remove("static");
  }
  btn.onclick = function () {
    if (menu.classList.contains("open")) {
      toggleButton();
      closeMenu();
    } else {
      toggleButton();
      openMenu();
    }
  }
  window.addEventListener('resize', function(){
    if (menu.classList.contains("open")) {
      toggleButton();
      closeMenu();
    }
  });
});
