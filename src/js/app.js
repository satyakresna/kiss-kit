import page from "page";
import Home from "./pages/home.js";
import Users from "./pages/users.js";
import NotFound from "./pages/notfound.js";

page('/', Home);
page('/users', Users);
page('/users/:username', Users);
page('*', NotFound);
// Call it!
page();