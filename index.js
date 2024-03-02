const red = 255;
const green = 192;
const blue = 203;

const header = document.getElementById("header");
console.log(header.innerText);

function changeColor() {
    const scrollFactor = 1 + window.scrollY / 400;

    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;

    const updatedColor = `rgb(${r}, ${g}, ${b})`;
console.log (updatedColor);
    header.style.backgroundColor = updatedColor;

}
changeColor();

window.addEventListener("scroll", changeColor);

