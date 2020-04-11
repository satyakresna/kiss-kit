export default function (ctx, title = null) {
  if (title !== null) {
    document.title = ctx.title = `${title} - Kiss Kit`;
  } else {
    document.title = 'Kiss Kit';
  }
}