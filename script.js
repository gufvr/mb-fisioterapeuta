function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-mari.png");
  } else {
    img.setAttribute("src", "./assets/avatar-mari.png");
  }
}
function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("active");
}
