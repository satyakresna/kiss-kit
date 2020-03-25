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

    function index(ctx) {
      closeMenu();
      setActiveMenu(ctx.path);
      setTitle(ctx);
      document.querySelector('main').textContent = 'Index';
    }

    function about(ctx) {
      closeMenu();
      setActiveMenu(ctx.path);
      setTitle(ctx, 'About');
      document.querySelector('main').textContent = 'About';
    }

    function users(ctx) {
      closeMenu();
      setActiveMenu(ctx.path);
      setTitle(ctx, 'Users');
      document.querySelector('main').textContent = `User ${ctx.params.username || ''}`;
    }

    function notfound(ctx) {
      setActiveMenu(ctx.path);
      setTitle(ctx, 'Not found');
      document.querySelector('main').textContent = 'Not found';
    }

    function closeMenu() {
      if (window.matchMedia("(max-width: 767px)").matches) {
        document.getElementById('sidebarMenu').style.transform = "translateX(-250px)";
        document.getElementById('sidebarMenu').style.transition = "transform 250ms ease-in-out";
        document.querySelector('div.menu-underlay').style.display = "none";
        document.querySelector('div.menu-underlay').style.pointerEvents = "none";
        document.getElementById('sidebarMenu').addEventListener('transitionend', function (e) {
          e.target.style.transitionProperty = "none";
        }); 
        document.body.style.overflow = "visible";
      }
    }

    document.querySelector('button.header__hamburger-btn').addEventListener('click', function () {
      document.getElementById('sidebarMenu').style.transform = "translateX(0)";
      document.getElementById('sidebarMenu').style.transition = "transform 250ms ease-in-out";
      document.querySelector('div.menu-underlay').style.display = "block";
      document.querySelector('div.menu-underlay').style.pointerEvents = "auto";
      document.getElementById('sidebarMenu').addEventListener('transitionend', function (e) {
        e.target.style.transitionProperty = "none";
      });
      document.body.style.overflow = "hidden";
    });

    document.querySelector('button.nav__hide-btn').addEventListener('click', function () {
      closeMenu();
    });

    document.querySelector('div.menu-underlay').addEventListener('click', function () {
      closeMenu();
    });

    function setActiveMenu(path) {
      Array.from(document.querySelectorAll(`#sidebarMenu > ul > li > a`)).forEach(el => {
        if (el.getAttribute('href') === path) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
    }

    function setTitle(ctx, title = null) {
      if (title !== null) {
        document.title = ctx.title = `${title} - Kiss Kit`;
      } else {
        document.title = 'Kiss Kit';
      }
    }
  }
}