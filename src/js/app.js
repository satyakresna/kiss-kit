document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    page('/', index);
    page('/about', about);
    page('/events', events);
    page('/users', users);
    page('/users/:username', users);
    page('*', notfound);
    // Call it!
    page();

    function index() {
      document.querySelector('main').textContent = 'Index';
    }

    function about() {
      document.querySelector('main').textContent = 'About';
    }

    function events() {
      document.querySelector('main').textContent = 'Events';
    }

    function users(ctx) {
      document.querySelector('main').textContent = `User ${ctx.params.username || ''}`;
    }

    function notfound() {
      document.querySelector('main').textContent = 'Not found';
    }
  }
}