export default function (path) {
  Array.from(document.querySelectorAll(`nav > ul > li > a`)).forEach(el => {
    if (el.getAttribute('href') === path) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}