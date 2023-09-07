const content = document.createElement("div");
content.id = "content";

const nav = document.createElement("nav");
const nav1 = document.createElement("a");
const nav2 = document.createElement("a");
const nav3 = document.createElement("a");
nav.append(nav1, nav2, nav3);

nav1.innerText = "Home";
nav2.innerText = "Menu";
nav3.innerText = "Contact";

document.body.append(nav, content);

import home from './home';
import menu from './menu';
import contact from './contact';

nav1.addEventListener("click", () => {
    home();
});
nav2.addEventListener("click", () => {
    menu();
});
nav3.addEventListener("click", () => {
    contact();
});

home();