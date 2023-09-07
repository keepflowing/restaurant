const content = document.querySelector("#content");

const menu = () => {
    content.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.innerHTML = "Menu";

    content.append(h1);
}

export default menu;