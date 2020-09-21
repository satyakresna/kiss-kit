import setActiveMenu from "../utils/setActiveMenu.js";
import setTitle from "../utils/setTitle.js";
import trackUrl from "../utils/trackUrl.js";

export default function (ctx) {
  setActiveMenu(ctx.path);
  setTitle(ctx);
  document.querySelector('main').textContent = 'Index';
  trackUrl(ctx);
}