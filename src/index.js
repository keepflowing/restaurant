import home from './home';
import menu from './menu';
import contact from './contact';

document.querySelector("#nav1").addEventListener("click", () => {
    home();
});
document.querySelector("#nav2").addEventListener("click", () => {
    menu();
});
document.querySelector("#nav3").addEventListener("click", () => {
    contact();
});

home();