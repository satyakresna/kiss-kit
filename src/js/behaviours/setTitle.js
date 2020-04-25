export default function (ctx, title = null) {
  if (title !== null) {
    document.title = ctx.title = `${title} - ${document.title}`;
  } else {
    document.title = document.title;
  }
}