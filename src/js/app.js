import page from "./plugins/page.mjs";

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    page('/', index);
    page('/about', about);
    page('/users', users);
    page('/users/:username', users);
    page('*', notfound);
    // Call it!
    page();

    function index() {
      closeMenu();
      document.querySelector('main').textContent = 'Index';
    }

    function about() {
      closeMenu();
      document.querySelector('main').textContent = 'About';
    }

    function users(ctx) {
      closeMenu();
      document.querySelector('main').textContent = `User ${ctx.params.username || ''}`;
    }

    function notfound() {
      document.querySelector('main').textContent = 'Not found';
    }

    function closeMenu() {
      window.requestAnimationFrame(() => {
        document.getElementById('sidebarMenu').style.transform = "translateX(-250px)";
        document.getElementById('sidebarMenu').style.transition = "transform 250ms ease-in-out";
        document.querySelector('div.menu-underlay').style.display = "none";
        setTimeout(() => {
          document.getElementById('sidebarMenu').style.transitionProperty = "none";
        }, 300);
      });
    }

    document.querySelector('button.header__hamburger-btn').addEventListener('click', function () {
      window.requestAnimationFrame(() => {
        document.getElementById('sidebarMenu').style.transform = "translateX(0)";
        document.getElementById('sidebarMenu').style.transition = "transform 250ms ease-in-out";
        document.querySelector('div.menu-underlay').style.display = "block";
        document.querySelector('div.menu-underlay').style.pointerEvents = "auto";
        setTimeout(() => {
          document.getElementById('sidebarMenu').style.transitionProperty = "none";
        }, 300);
      })
    });

    document.querySelector('button.nav__hide-btn').addEventListener('click', function () {
      closeMenu();
    });

    document.querySelector('div.menu-underlay').addEventListener('click', function () {
      closeMenu();
    })
  }
}