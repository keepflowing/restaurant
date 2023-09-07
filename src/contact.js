const content = document.querySelector("#content");

const contact = () => {
    content.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.innerHTML = "Contact";

    content.append(h1);
}

export default contact;