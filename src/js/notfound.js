import setActiveMenu from "./utils/setActiveMenu.js";
import setTitle from "./utils/setTitle.js";

export default function (ctx) {
  setActiveMenu(ctx.path);
  setTitle(ctx, 'Not found');
  document.querySelector('main').textContent = 'Not found';
}
