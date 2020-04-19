import closeMenu from "../behaviours/closeMenu.js";
import setActiveMenu from "../behaviours/setActiveMenu.js";
import setTitle from "../behaviours/setTitle.js";
import trackUrl from "../behaviours/trackUrl.js";

export default function (ctx) {
  closeMenu();
  setActiveMenu(ctx.path);
  setTitle(ctx, 'About');
  document.querySelector('main').textContent = 'About';
  trackUrl(ctx);
}