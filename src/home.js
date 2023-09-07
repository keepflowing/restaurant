const home = () => {
    content.innerHTML = "";
    const h1 = document.createElement("h1");
    h1.innerHTML = "My Restaurant";

    const img = document.createElement("img");
    img.src = "https://www.allrecipes.com/thmb/PujANugNXQW7ugnivQt8b4_-13k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RM-169856-CreamCheeseandCrabSushiRolls-ddmfs-3x4-6421-8d233e210db3458f8574bafad1c69e70.jpg"
    img.width = "600";

    const p = document.createElement("p");
    p.innerHTML = "This restaurant has great food!"

    content.append(h1, img, p);
}

export default home;