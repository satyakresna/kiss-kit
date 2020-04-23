import setActiveMenu from "../behaviours/setActiveMenu.js";
import setTitle from "../behaviours/setTitle.js";

export default function (ctx) {
  setActiveMenu(ctx.path);
  setTitle(ctx, 'Not found');
  document.querySelector('main').textContent = 'Not found';
}
