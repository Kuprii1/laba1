// Функція для зміни розміру зображення при кліку
function resizeImage(event) {
    let image = event.currentTarget;
    
    image.style.width = (image.offsetWidth === 200) ? "300px" : "800px";
    // Видаляємо обробник подій після першого кліку
    image.removeEventListener("click", resizeImage);
}

let imageElement = document.getElementById("resizableImage");

imageElement.addEventListener("click", resizeImage);