import page from "page";
import Home from "./home/index.js";
import Users from "./users/index.js";
import NotFound from "./notfound.js";

page('/', Home);
page('/users', Users);
page('/users/:username', Users);
page('*', NotFound);
// Call it!
page();