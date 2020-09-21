import setActiveMenu from "../utils/setActiveMenu.js";
import setTitle from "../utils/setTitle.js";
import trackUrl from "../utils/trackUrl.js";

export default function (ctx) {
  setActiveMenu(ctx.path);
  setTitle(ctx, 'Users');
  document.querySelector('main').textContent = `User ${ctx.params.username || ''}`;
  trackUrl(ctx);
}