import setActiveMenu from "../behaviours/setActiveMenu.js";
import setTitle from "../behaviours/setTitle.js";
import trackUrl from "../behaviours/trackUrl.js";

export default function (ctx) {
  setActiveMenu(ctx.path);
  setTitle(ctx);
  document.querySelector('main').textContent = 'Index';
  trackUrl(ctx);
}