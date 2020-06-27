import setActiveMenu from "../behaviours/setActiveMenu.js";
import setTitle from "../behaviours/setTitle.js";
import trackUrl from "../behaviours/trackUrl.js";

export default function (ctx) {
  setActiveMenu(ctx.path);
  setTitle(ctx, 'Users');
  document.querySelector('main').textContent = `User ${ctx.params.username || ''}`;
  trackUrl(ctx);
}