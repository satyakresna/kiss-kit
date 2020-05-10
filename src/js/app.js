import page from "page";
import Home from "./pages/home.js";
import About from "./pages/about.js";
import Users from "./pages/users.js";
import NotFound from "./pages/notfound.js";
import openMenu from "./behaviours/openMenu.js";
import closeMenu from "./behaviours/closeMenu.js";

page('/', Home);
page('/about', About);
page('/users', Users);
page('/users/:username', Users);
page('*', NotFound);
// Call it!
page();

document.querySelector('button.header__hamburger-btn').addEventListener('click', function () {
  openMenu();
});

document.querySelector('button.nav__hide-btn').addEventListener('click', function () {
  closeMenu();
});

document.querySelector('div.menu-underlay').addEventListener('click', function () {
  closeMenu();
});