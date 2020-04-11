import closeMenu from "../behaviours/closeMenu.js";
import setActiveMenu from "../behaviours/setActiveMenu.js";
import setTitle from "../behaviours/setTitle.js";

export default function (ctx) {
  closeMenu();
  setActiveMenu(ctx.path);
  setTitle(ctx);
  document.querySelector('main').textContent = 'Index';
}